
export const templates= [
// Miss you section
{ id: 'm1', name: 'Thinking of You', description: 'Simple and heartfelt', category: 'miss-you', thumbnail: 'bg-gradient-to-br from-rose-100 to-pink-100', isPremium: false, sampleMessage: "I miss your smile, your laugh, the way you make everything better. Can't wait to see you again.", gradient: 'from-rose-100 to-pink-100' },
{ id: 'm2', name: 'Distance Hurts', description: 'Raw and honest', category: 'miss-you', thumbnail: 'bg-gradient-to-br from-purple-100 to-pink-100', isPremium: false, sampleMessage: "Every mile between us is a reminder of how much I love you. Missing you more each day.", gradient: 'from-purple-100 to-pink-100' },
{ id: 'm3', name: 'Counting Days', description: 'Countdown style', category: 'miss-you', thumbnail: 'bg-gradient-to-br from-blue-100 to-purple-100', isPremium: true, sampleMessage: "Only 23 days until I can hold you again. But who's counting? (Me. I'm counting.)", gradient: 'from-blue-100 to-purple-100' },
{ id: 'm4', name: 'Wish You Were Here', description: 'Travel-inspired', category: 'miss-you', thumbnail: 'bg-gradient-to-br from-amber-100 to-orange-100', isPremium: false, sampleMessage: "Seeing beautiful things and wishing you were here to share them with me.", gradient: 'from-amber-100 to-orange-100' },
{ id: 'm5', name: 'Late Night Missing', description: 'For quiet moments', category: 'miss-you', thumbnail: 'bg-gradient-to-br from-indigo-100 to-blue-100', isPremium: true, sampleMessage: "It's 2am and I'm thinking about you. Again. Always.", gradient: 'from-indigo-100 to-blue-100' },

// Good morning / Good night section
{ id: 'gm1', name: 'Rise & Shine', description: 'Energetic morning', category: 'morning-night', thumbnail: 'bg-gradient-to-br from-yellow-100 to-amber-100', isPremium: false, sampleMessage: "Good morning, sunshine! Hope your day is as amazing as you are.", gradient: 'from-yellow-100 to-amber-100' },
{ id: 'gm2', name: 'Coffee & You', description: 'Cozy morning vibe', category: 'morning-night', thumbnail: 'bg-gradient-to-br from-orange-100 to-red-100', isPremium: false, sampleMessage: "Starting my day with coffee and thoughts of you. Perfect combination.", gradient: 'from-orange-100 to-red-100' },
{ id: 'gm3', name: 'Sweet Dreams', description: 'Peaceful good night', category: 'morning-night', thumbnail: 'bg-gradient-to-br from-indigo-100 to-purple-100', isPremium: false, sampleMessage: "Sleep well, dream sweet. I'll be thinking of you until we meet again.", gradient: 'from-indigo-100 to-purple-100' },
{ id: 'gm4', name: 'Under Same Stars', description: 'Romantic night message', category: 'morning-night', thumbnail: 'bg-gradient-to-br from-slate-800 to-indigo-900', isPremium: true, sampleMessage: "Looking at the same moon, dreaming of the same future. Good night, my love.", gradient: 'from-slate-800 to-indigo-900' },
{ id: 'gm5', name: 'Morning Motivation', description: 'Encouragement + love', category: 'morning-night', thumbnail: 'bg-gradient-to-br from-teal-100 to-green-100', isPremium: true, sampleMessage: "You're going to crush today. I believe in you. Go get 'em!", gradient: 'from-teal-100 to-green-100' },

// Anniversary section
{ id: 'a1', name: 'Our Story', description: 'Timeline style', category: 'anniversary', thumbnail: 'bg-gradient-to-br from-rose-200 to-pink-200', isPremium: true, sampleMessage: "Three years ago today, you said yes to a coffee date. Best decision we ever made.", gradient: 'from-rose-200 to-pink-200' },
{ id: 'a2', name: 'Still Falling', description: 'Classic romantic', category: 'anniversary', thumbnail: 'bg-gradient-to-br from-red-100 to-rose-100', isPremium: false, sampleMessage: "Another year together, and I'm still falling more in love with you every single day.", gradient: 'from-red-100 to-rose-100' },
{ id: 'a3', name: 'Grateful For Us', description: 'Gratitude focused', category: 'anniversary', thumbnail: 'bg-gradient-to-br from-amber-100 to-yellow-100', isPremium: false, sampleMessage: "Thank you for being my partner, my best friend, my everything. Happy anniversary.", gradient: 'from-amber-100 to-yellow-100' },
{ id: 'a4', name: 'Forever Starts Now', description: 'Future promise', category: 'anniversary', thumbnail: 'bg-gradient-to-br from-purple-200 to-pink-200', isPremium: true, sampleMessage: "Here's to many more years of adventures, laughter, and love together.", gradient: 'from-purple-200 to-pink-200' },
{ id: 'a5', name: 'The Little Things', description: 'Everyday love', category: 'anniversary', thumbnail: 'bg-gradient-to-br from-blue-100 to-cyan-100', isPremium: false, sampleMessage: "I love the big moments, but I love our everyday moments even more. Happy anniversary.", gradient: 'from-blue-100 to-cyan-100' },

// Just because section
{ id: 'jb1', name: 'Random I Love You', description: 'No reason needed', category: 'just-because', thumbnail: 'bg-gradient-to-br from-pink-100 to-rose-100', isPremium: false, sampleMessage: "No special occasion. Just wanted to remind you that you're loved.", gradient: 'from-pink-100 to-rose-100' },
{ id: 'jb2', name: "You're Amazing", description: 'Appreciation note', category: 'just-because', thumbnail: 'bg-gradient-to-br from-violet-100 to-purple-100', isPremium: false, sampleMessage: "Just a reminder that you're absolutely amazing and I'm lucky to have you.", gradient: 'from-violet-100 to-purple-100' },
{ id: 'jb3', name: 'Made Me Smile', description: 'Light and playful', category: 'just-because', thumbnail: 'bg-gradient-to-br from-yellow-100 to-orange-100', isPremium: false, sampleMessage: "Something reminded me of you today and I couldn't stop smiling.", gradient: 'from-yellow-100 to-orange-100' },
{ id: 'jb4', name: 'Proud of You', description: 'Support + love', category: 'just-because', thumbnail: 'bg-gradient-to-br from-green-100 to-emerald-100', isPremium: true, sampleMessage: "I see how hard you're working and I'm so proud of everything you do.", gradient: 'from-green-100 to-emerald-100' },
{ id: 'jb5', name: 'Silly Love Note', description: 'Fun and quirky', category: 'just-because', thumbnail: 'bg-gradient-to-br from-fuchsia-100 to-pink-100', isPremium: false, sampleMessage: "You're weird. I like it. Let's be weird together forever.", gradient: 'from-fuchsia-100 to-pink-100' },
];

const categories = [
{ id: 'miss-you', title: 'Miss you', emoji: '💭' },
{ id: 'morning-night', title: 'Good morning / Good night', emoji: '☀️🌙' },
{ id: 'anniversary', title: 'Anniversary', emoji: '💕' },
{ id: 'just-because', title: 'Just because', emoji: '✨' },
];