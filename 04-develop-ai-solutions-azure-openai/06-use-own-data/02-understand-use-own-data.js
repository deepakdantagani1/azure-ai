/**
 * Understand Retrieval Augmented Generation
 * 
 * Once data is in a AI Search index, Azure OpenAI on your data goes through the following steps:
 * ==> Receive user prompt
 * ==> Determine relevant content and intent of the prompt.
 * ==> Query the search index with that content and intent.
 * ==> Insert search result chunk into the Azure OpenAI prompt, along with system message and user prompt.
 * ==> Send entire prompt to Azure OpenAI.
 * ==> Return response and data reference (if any) to the user.
 * 
 */

/**
 * Fine-tuning vs. RAG
 * 
 * Fine-tuning is a technique used to create a custom model by training an existing foundational model such as 
 * gpt-35-turbo with a dataset of additional training data. Fine-tuning can result in higher quality requests than prompt engineering 
 * alone, customize the model on examples larger than can fit in a prompt, and allow the user to provide fewer examples to get the 
 * same high quality response. However, the process for fine-tuning is both costly and time intensive, and should only be used for 
 * use cases where it's necessary.

RAG with Azure OpenAI on your data still uses the stateless API to connect to the model, which removes 
the requirement of training a custom model with your data and simplifies the interaction with the AI model. AI Search first finds the 
useful information to answer the prompt, adds that to the prompt as grounding data, and Azure OpenAI forms the response based on 
that information.
 *
 */

/**
 * Semantic search is a type of search technology that understands the meaning behind the words in a query, 
 * rather than just matching keywords. Unlike traditional search engines that rely on exact word matches, semantic search 
 * focuses on the intent or context of the search, so it can deliver more relevant results.
 */