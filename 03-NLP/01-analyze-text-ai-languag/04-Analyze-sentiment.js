/**
 * Analyze sentiment
 * ==> When using Azure AI Language to evaluate sentiment, the response includes overall document sentiment and 
 * individual sentence sentiment for each document submitted to the service.
 * ==> Sentence sentiment is based on confidence scores for positive, negative, and neutral classification values between 0 and 1.
 * 
 * ==> Overall document sentiment is based on sentences:
 * If all sentences are neutral, the overall sentiment is neutral.
 * If sentence classifications include only positive and neutral, the overall sentiment is positive.
 * If the sentence classifications include only negative and neutral, the overall sentiment is negative.
 * If the sentence classifications include positive and negative, the overall sentiment is mixed.
 */

/**
 * For example, you can submit a document with the following text:
 */
// {
//     "kind": "SentimentAnalysis",
//     "parameters": {
//       "modelVersion": "latest"
//     },
//     "analysisInput": {
//       "documents": [
//         {
//           "id": "1",
//           "language": "en",
//           "text": "Good morning!"
//         }
//       ]
//     }
//   }

/**
 * The response from the service might look like this
 */

// {
//     "kind": "SentimentAnalysisResults",
//     "results": {
//       "documents": [
//         {
//           "id": "1",
//           "sentiment": "positive",
//           "confidenceScores": {
//             "positive": 0.89,
//             "neutral": 0.1,
//             "negative": 0.01
//           },
//           "sentences": [
//             {
//               "sentiment": "positive",
//               "confidenceScores": {
//                 "positive": 0.89,
//                 "neutral": 0.1,
//                 "negative": 0.01
//               },
//               "offset": 0,
//               "length": 13,
//               "text": "Good morning!"
//             }
//           ],
//           "warnings": []
//         }
//       ],
//       "errors": [],
//       "modelVersion": "2022-11-01"
//     }
//   }