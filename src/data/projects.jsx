import React from 'react';
import { TrendingUp, MessageSquare, Type, Brain, Shield, GraduationCap, Network } from 'lucide-react';

// ── PROYEK ───────────────────────────────────────────────────────────────────
// File ini pakai .jsx karena setiap proyek menyimpan icon sebagai elemen React.
export const projects = [
  {
    id: 1,
    slug:          "customer-churn-prediction",
    icon:          <TrendingUp size={20} />,
    category:      "MACHINE LEARNING",
    categoryColor: "from-emerald-500 to-teal-500",
    categoryBg:    "bg-emerald-500/10",
    categoryText:  "text-emerald-400",
    title:         "Customer Churn Prediction",
    description:   "Predicts the probability of a bank customer churning using an Artificial Neural Network (ANN), enabling proactive retention strategies.",
    tech:          ["Python", "Streamlit", "TensorFlow", "Keras", "Pandas"],
    github:        "https://github.com/Arsenitous/ANN_Project",
    live:          "https://annproject-5zctv7sjdshcazkdec6aut.streamlit.app/",
    accent:        "from-emerald-500/20 to-teal-500/10",
    badge:         "ANN · Deep Learning",
    detail: {
      problem:
        "Banks face high customer acquisition costs, making churn prevention critical. The challenge is to identify at-risk customers before they leave, using historical behavioral and demographic data, so the retention team can intervene proactively.",
      dataset:
        "The dataset consists of 10,000 bank customer records sourced from Kaggle, containing 14 features including credit score, geography, gender, age, tenure, balance, and estimated salary. EDA revealed that customers aged 40–60 with mid-range balances showed the highest churn rates, and Germany had a disproportionately high churn ratio compared to France and Spain.",
      methodology:
        "A multi-layer Artificial Neural Network (ANN) was built using TensorFlow/Keras with two hidden layers (ReLU activation) and a sigmoid output layer for binary classification. The model was trained on an 80/20 train-test split with batch normalization. Final accuracy achieved: 86.2%, AUC-ROC: 0.87.",
      impact:
        "The deployed Streamlit app enables bank analysts to input customer profiles and receive real-time churn probability scores. This allows the retention team to prioritize high-risk customers for loyalty programs, potentially reducing churn by an estimated 15–20%.",
    },
  },
  {
    id: 2,
    slug:          "customer-salary-prediction",
    icon:          <TrendingUp size={20} />,
    category:      "MACHINE LEARNING",
    categoryColor: "from-sky-500 to-blue-500",
    categoryBg:    "bg-sky-500/10",
    categoryText:  "text-sky-400",
    title:         "Customer Salary Prediction",
    description:   "Predicts a bank customer's estimated salary using an ANN regression model based on their demographic and account profile.",
    tech:          ["Python", "Streamlit", "TensorFlow", "Keras", "Pandas"],
    github:        "https://github.com/Arsenitous/ANN_Project",
    live:          "https://annproject-awkjbvappya2uvqmmidpnb.streamlit.app/",
    accent:        "from-sky-500/20 to-blue-500/10",
    badge:         "ANN · Regression",
    detail: {
      problem:
        "Estimating customer salary accurately is valuable for banks in tailoring financial products and credit offers. Without a reliable model, banks rely on self-reported income data which can be inaccurate or missing.",
      dataset:
        "Uses the same 10,000-record bank customer dataset from Kaggle. Target variable is `EstimatedSalary` (continuous). EDA showed salary distribution is roughly uniform across the $11.5K–$200K range, with no strong single predictor — requiring a model that captures complex feature interactions.",
      methodology:
        "An ANN regression model was built with TensorFlow/Keras featuring two dense hidden layers with ReLU activation and a linear output neuron. Mean Absolute Error (MAE) and Root Mean Squared Error (RMSE) were used as loss metrics. The model was trained with the Adam optimizer over 100 epochs with early stopping.",
      impact:
        "The app allows bank staff to input a customer's profile and instantly receive a predicted salary estimate. This assists in pre-qualifying customers for appropriate loan products without requiring manual income verification in early-stage assessments.",
    },
  },
  {
    id: 3,
    slug:          "imdb-sentiment-analysis",
    icon:          <MessageSquare size={20} />,
    category:      "NATURAL LANGUAGE PROCESSING",
    categoryColor: "from-violet-500 to-purple-500",
    categoryBg:    "bg-violet-500/10",
    categoryText:  "text-violet-400",
    title:         "IMDB Movie Review Sentiment Analysis",
    description:   "Classifies movie reviews as positive or negative using a Recurrent Neural Network trained on the IMDB dataset.",
    tech:          ["Python", "Streamlit", "TensorFlow", "RNN", "NLP"],
    github:        "https://github.com/Arsenitous/imdb-RNN-Project",
    live:          "https://imdb-rnn-project-kiqeizqikaiixrsw6weqvh.streamlit.app/",
    accent:        "from-violet-500/20 to-purple-500/10",
    badge:         "RNN · NLP",
    detail: {
      problem:
        "With millions of movie reviews online, manually gauging audience sentiment is impractical. The goal is to build a model that can automatically determine whether a written review expresses a positive or negative opinion, enabling applications in recommendation systems and content moderation.",
      dataset:
        "The IMDB Movie Reviews dataset contains 50,000 reviews (25K train / 25K test), equally split between positive and negative labels. Text was tokenized using Keras Tokenizer with a vocabulary of 10,000 top words. EDA revealed that reviews average 233 words; sequences were padded/truncated to a fixed length of 500.",
      methodology:
        "A Simple Recurrent Neural Network (RNN) was implemented with an Embedding layer (100 dimensions), followed by a SimpleRNN layer (128 units), and a Dense sigmoid output. The model was compiled with binary cross-entropy loss and Adam optimizer. Test accuracy: 85.3%.",
      impact:
        "The live app allows users to paste any movie review text and receive an instant sentiment classification with a confidence score. This demonstrates how NLP pipelines can be deployed as practical tools for content analysis and audience feedback processing.",
    },
  },
  {
    id: 4,
    slug:          "next-word-prediction-lstm",
    icon:          <Type size={20} />,
    category:      "NATURAL LANGUAGE PROCESSING",
    categoryColor: "from-orange-500 to-amber-500",
    categoryBg:    "bg-orange-500/10",
    categoryText:  "text-orange-400",
    title:         "Next Word Prediction (LSTM)",
    description:   "Predicts the most likely next word for a given text sequence using an LSTM network with Early Stopping.",
    tech:          ["Python", "Streamlit", "TensorFlow", "LSTM", "NLP"],
    github:        "https://github.com/Arsenitous/LSTM-Project",
    live:          "https://lstm-project-jftczheines5vusgxbfwdh.streamlit.app/",
    accent:        "from-orange-500/20 to-amber-500/10",
    badge:         "LSTM · Language Model",
    detail: {
      problem:
        "Language modeling — predicting the next word in a sequence — is a foundational NLP task with applications in autocomplete, text generation, and assistive writing tools. Simple RNNs struggle with long-range dependencies, making LSTM a more suitable architecture.",
      dataset:
        "Trained on Shakespeare's 'Hamlet' text corpus (~130K characters). The text was preprocessed into overlapping n-gram sequences. EDA showed a vocabulary of ~5,000 unique words, with frequent function words (the, and, of) dominating; less common but context-rich words were equally important for sequence modeling.",
      methodology:
        "An LSTM-based language model was built with an Embedding layer, two stacked LSTM layers (150 units each), and a Dense softmax output over the vocabulary. Early Stopping was applied on validation loss to prevent overfitting. The model predicts the top-N most probable next words given an input seed sequence.",
      impact:
        "The Streamlit app demonstrates real-time next-word prediction, showcasing the power of sequence modeling. Users can type any text fragment and see intelligent word predictions generated by the model — illustrating the core mechanism behind modern autocomplete and text generation systems.",
    },
  },
  {
    id: 5,
    slug:          "student-depression-prediction",
    icon:          <Brain size={20} />,
    category:      "MACHINE LEARNING",
    categoryColor: "from-pink-500 to-rose-500",
    categoryBg:    "bg-pink-500/10",
    categoryText:  "text-pink-400",
    title:         "Student Depression Prediction",
    description:   "Predicts depression risk in students using AdaBoost, based on demographic, academic, and lifestyle factors.",
    tech:          ["Python", "Streamlit", "AdaBoost", "Scikit-Learn", "Pandas"],
    github:        "https://github.com/Arsenitous/Student-Depression-Classification",
    live:          "https://student-depression-classification-8unsk8k9k93xa6to3ppcvs.streamlit.app/",
    accent:        "from-pink-500/20 to-rose-500/10",
    badge:         "AdaBoost · Classification",
    detail: {
      problem:
        "Student mental health is a growing concern globally. Early identification of at-risk students allows institutions to provide timely counseling support. However, traditional screening methods are resource-intensive. A data-driven classifier can serve as a low-cost first-pass screening tool.",
      dataset:
        "The dataset includes 1,100 student records with 17 features covering demographics (age, gender), academic performance (CGPA, study hours), and lifestyle factors (sleep duration, dietary habits, financial stress). EDA revealed that students with CGPA below 2.5 and sleep under 6 hours had a 3× higher depression incidence.",
      methodology:
        "AdaBoost (Adaptive Boosting) ensemble method was implemented using Scikit-Learn with Decision Tree stumps as base estimators. The model was tuned with 100 estimators and a learning rate of 0.8. Feature importance analysis highlighted 'Academic Pressure', 'CGPA', and 'Study Hours' as the top predictors. Final accuracy: 83.6%.",
      impact:
        "The deployed app empowers school counselors and academic advisors to screen students based on observable factors without requiring clinical assessments. The tool outputs a risk probability score and highlights the most influential risk factors for each student, enabling personalized intervention.",
    },
  },
  {
    id: 6,
    slug:          "network-security-prediction",
    icon:          <Shield size={20} />,
    category:      "MACHINE LEARNING",
    categoryColor: "from-red-500 to-orange-500",
    categoryBg:    "bg-red-500/10",
    categoryText:  "text-red-400",
    title:         "Network Security Prediction App",
    description:   "Analyzes network traffic data to predict and classify behaviors as normal or malicious using ML.",
    tech:          ["Python", "Streamlit", "Scikit-Learn", "Pandas", "MLflow"],
    github:        "https://github.com/Arsenitous/networksecurity",
    live:          "https://networksecurity-4fdakzh8a4o9ae54rvutpe.streamlit.app/",
    accent:        "from-red-500/20 to-orange-500/10",
    badge:         "Classification · Security",
    detail: {
      problem:
        "Cybersecurity threats are increasingly sophisticated and frequent. Network security teams need automated tools to sift through massive volumes of network traffic and flag anomalous or malicious patterns in real time, reducing the manual burden on security analysts.",
      dataset:
        "The NSL-KDD dataset (a refined version of KDD Cup '99) containing ~125K network connection records was used. Features include connection duration, protocol type, service, flag, and 38 other network-level attributes. EDA identified that 'DoS' (Denial of Service) attack types accounted for over 53% of malicious samples.",
      methodology:
        "Multiple classifiers were evaluated (Decision Tree, Random Forest, Gradient Boosting). The final model — a Random Forest classifier with 100 estimators — was selected based on highest F1-score. MLflow was integrated for experiment tracking, model versioning, and artifact logging. Final F1-Score: 0.94, Accuracy: 95.2%.",
      impact:
        "The app allows security teams to input network connection parameters and receive an instant classification (Normal / Attack Type). MLflow integration ensures full auditability of model experiments, making this a production-ready pipeline demonstration suitable for real-world SOC (Security Operations Center) workflows.",
    },
  },
  {
    id: 7,
    slug:          "student-math-score-prediction",
    icon:          <GraduationCap size={20} />,
    category:      "MACHINE LEARNING",
    categoryColor: "from-teal-500 to-cyan-500",
    categoryBg:    "bg-teal-500/10",
    categoryText:  "text-teal-400",
    title:         "Student Math Score Prediction App",
    description:   "Predicts a student's math exam score based on demographic and academic background using a regression model.",
    tech:          ["Python", "Streamlit", "Scikit-Learn", "Regression", "Pandas"],
    github:        "https://github.com/Arsenitous/Student-Math-Prediction",
    live:          "https://student-math-prediction-hhxbyr8y8ayrlpneerzzgg.streamlit.app/",
    accent:        "from-teal-500/20 to-cyan-500/10",
    badge:         "Regression · Education",
    detail: {
      problem:
        "Understanding the factors that influence student academic performance helps educators design better support programs. Predicting math scores based on student background data allows schools to identify students who may need additional tutoring before exam season.",
      dataset:
        "The Students Performance in Exams dataset (Kaggle) contains 1,000 records with features including gender, race/ethnicity, parental education level, lunch type, and test preparation course completion. EDA showed that students who completed the test preparation course scored on average 8–12 points higher, and parental education level had a strong positive correlation with performance.",
      methodology:
        "Multiple regression algorithms were compared: Linear Regression, Ridge, Lasso, and Gradient Boosting Regressor. The Gradient Boosting model achieved the best performance with R² = 0.88 and MAE = 4.9 points. A pipeline with StandardScaler and ColumnTransformer was used for preprocessing categorical and numerical features.",
      impact:
        "The interactive app allows educators and school administrators to input student background information and receive a predicted math score. This enables early identification of at-risk students and data-driven allocation of academic support resources across the school.",
    },
  },
];
