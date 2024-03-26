import jwt from "jsonwebtoken";

export const generateToken = async (userId, res) => {
    const token = jwt.sign({ userId }, `IagbZ4Tj91VGsU+PuCbRbb/3iMbAuxS/FVGB7QlP7ok=`, { expiresIn: '15d' })
    res.cookie('jwt', token, {
        maxAge: 15 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        sameSite: "strict",
        //secure:process.env.NODE_ENV !== "development"
    })
}
