export type SentimentState = 'Positive' | 'Neutral' | 'Concerned' | 'Negative';

export function classifySentiment(query: string): SentimentState {
  const q = query.toLowerCase();

  const concernedKeywords = ['doubt', 'worry', 'scared', 'temporary', 'hesitate', 'risk', 'चिंता', 'डर', 'अस्थायी', 'जोखिम'];
  const negativeKeywords = ['bad', 'useless', 'fake', 'scam', 'terrible', 'गलत', 'बेकार', 'धोखा'];
  const positiveKeywords = ['good', 'great', 'excellent', 'interested', 'confident', 'thanks', 'अच्छा', 'उत्कृष्ट', 'धन्यवाद', 'भरोसा'];

  if (negativeKeywords.some((k) => q.includes(k))) return 'Negative';
  if (concernedKeywords.some((k) => q.includes(k))) return 'Concerned';
  if (positiveKeywords.some((k) => q.includes(k))) return 'Positive';

  return 'Neutral';
}
