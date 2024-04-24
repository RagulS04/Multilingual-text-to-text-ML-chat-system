import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js"
import { getReceiverSocketId,io} from "../socket/socket.js";
import {query} from "../controllers/translate.controller.js"
export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] }
        })

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            })
        }
        const tamil = await query({ "inputs": message, "parameters": { "src_lang": "en_XX", "tgt_lang": "ta_IN" } })

        console.log(tamil)
        const newMessage = await Message.create({
            senderId,
            receiverId,
            message,
            tamil:tamil[0].translation_text
        })

        if (newMessage) {
            conversation.messages.push(newMessage._id)
        }

        await conversation.save();
        await newMessage.save();
        const receiverSocketId = getReceiverSocketId(receiverId);

        if(receiverSocketId){
            io.to(receiverSocketId).emit("newMessage",newMessage)
        }

        res.status(201).json({ data: newMessage })
    } catch (error) {
        console.log("Error in sendMessage controller ", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export const getMessage = async (req, res) => {
    try {
        const { id: userToChatId } = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId] },
        }).populate("messages");

        if (!conversation) return res.status(200).json([]);

        const messages = conversation.messages;

        // return res.status(200).json(messages);
        // const translate = query({ "inputs": messages, "parameters": { "src_lang": "en_XX", "tgt_lang": "en_XX" } })
        return res.status(200).json(messages);
    } catch (error) {
        console.log("Error in getMessage controller ", error.message);
        res.status(500).json({ error: "Internal server error" })
    }
}