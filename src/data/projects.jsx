import React from 'react';
import { TrendingUp, MessageSquare, Type, Brain, Shield, GraduationCap } from 'lucide-react';

// ── PROYEK (dari project.txt) ────────────────────────────────────────────────
// File ini pakai .jsx karena setiap proyek menyimpan icon sebagai elemen React.
export const projects = [
  {
    id: 1,
    icon:        <TrendingUp size={20} />,
    title:       "Customer Churn Prediction 🏦",
    description: "This application uses an Artificial Neural Network (ANN) to predict the probability of a bank customer churning (leaving the bank).",
    tech:        ["Python", "Streamlit", "TensorFlow", "Keras", "Pandas"],
    github:      "https://github.com/Arsenitous/ANN_Project",
    live:        "https://annproject-5zctv7sjdshcazkdec6aut.streamlit.app/",
    accent:      "from-emerald-500/20 to-teal-500/10",
    badge:       "ANN · Deep Learning"
  },
  {
    id: 2,
    icon:        <TrendingUp size={20} />,
    title:       "Customer Salary Prediction 💵",
    description: "This application uses an Artificial Neural Network (ANN) to predict the Estimated Salary of a bank customer based on their profile.",
    tech:        ["Python", "Streamlit", "TensorFlow", "Keras", "Pandas"],
    github:      "https://github.com/Arsenitous/ANN_Project",
    live:        "https://annproject-awkjbvappya2uvqmmidpnb.streamlit.app/",
    accent:      "from-sky-500/20 to-blue-500/10",
    badge:       "ANN · Regression"
  },
  {
    id: 3,
    icon:        <MessageSquare size={20} />,
    title:       "IMDB Movie Review Sentiment Analysis",
    description: "Enter a movie review to classify it as positive or negative using a Recurrent Neural Network trained on the IMDB dataset.",
    tech:        ["Python", "Streamlit", "TensorFlow", "RNN", "NLP"],
    github:      "https://github.com/Arsenitous/imdb-RNN-Project",
    live:        "https://imdb-rnn-project-kiqeizqikaiixrsw6weqvh.streamlit.app/",
    accent:      "from-violet-500/20 to-purple-500/10",
    badge:       "RNN · NLP"
  },
  {
    id: 4,
    icon:        <Type size={20} />,
    title:       "Next Word Prediction (LSTM)",
    description: "Enter a sequence of words and the model will predict the most likely next word using a Long Short-Term Memory (LSTM) network with Early Stopping.",
    tech:        ["Python", "Streamlit", "TensorFlow", "LSTM", "NLP"],
    github:      "https://github.com/Arsenitous/LSTM-Project",
    live:        "https://lstm-project-jftczheines5vusgxbfwdh.streamlit.app/",
    accent:      "from-orange-500/20 to-amber-500/10",
    badge:       "LSTM · Language Model"
  },
  {
    id: 5,
    icon:        <Brain size={20} />,
    title:       "Student Depression Prediction 🧠",
    description: "This application uses an AdaBoost ML Model to predict the probability of a student experiencing depression based on demographic, academic, and lifestyle factors.",
    tech:        ["Python", "Streamlit", "AdaBoost", "Scikit-Learn", "Pandas"],
    github:      "https://github.com/Arsenitous/Student-Depression-Classification",
    live:        "https://student-depression-classification-8unsk8k9k93xa6to3ppcvs.streamlit.app/",
    accent:      "from-pink-500/20 to-rose-500/10",
    badge:       "AdaBoost · Classification"
  },
  {
    id: 6,
    icon:        <Shield size={20} />,
    title:       "🛡️ Network Security Prediction App",
    description: "Welcome to the Network Security Prediction tool. This application analyzes network data to predict and classify network behaviors as normal or malicious.",
    tech:        ["Python", "Streamlit", "Scikit-Learn", "Pandas", "MLflow"],
    github:      "https://github.com/Arsenitous/networksecurity",
    live:        "https://networksecurity-4fdakzh8a4o9ae54rvutpe.streamlit.app/",
    accent:      "from-red-500/20 to-orange-500/10",
    badge:       "Classification · Security"
  },
  {
    id: 7,
    icon:        <GraduationCap size={20} />,
    title:       "🎓 Student Math Score Prediction App",
    description: "Welcome to the Student Math Score Prediction tool. This application uses a Machine Learning model to predict a student's math exam score based on their demographic and academic background.",
    tech:        ["Python", "Streamlit", "Scikit-Learn", "Regression", "Pandas"],
    github:      "https://github.com/Arsenitous/Student-Math-Prediction",
    live:        "https://student-math-prediction-hhxbyr8y8ayrlpneerzzgg.streamlit.app/",
    accent:      "from-teal-500/20 to-cyan-500/10",
    badge:       "Regression · Education"
  }
];
