export async function query(data) {
	const response = await fetch(
		"https://api-inference.huggingface.co/models/facebook/mbart-large-50-many-to-many-mmt",
		{
			headers: { Authorization: "Bearer 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" },
			method: "POST",
			body: JSON.stringify(data),
		}
	);
    //console.log(response)
	const result = await response.json();
    //console.log(result[0])
	return result;
}

// query({ "inputs": "I am Selva", "parameters": { "src_lang": "en_XX", "tgt_lang": "ta_IN" } }).then((response) => {
//     console.log(JSON.stringify(response));
// });