# -*- coding: utf-8 -*-
"""foodi3.ipynb

Automatically generated by Colab.

Original file is located at
    https://colab.research.google.com/drive/1K-3CRnl4o4cYSCxTUoQPtwnpr6wnjR-7
"""

# Load CSV File of Data into the Google Colab Environment
from google.colab import files
upload = files.upload()

import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Embedding, Flatten, Dense
from tensorflow.keras.preprocessing.text import Tokenizer
from tensorflow.keras.preprocessing.sequence import pad_sequences
import numpy as np

# Load data from CSV (replace with your data path)
data = pd.read_csv('food_data.csv')

# Separate features (X) and labels (y)
X = data['Food Item'].values
y = data['Category'].values

# Use LabelEncoder to convert categories to numerical labels
label_encoder = LabelEncoder()
y = label_encoder.fit_transform(y)

# Split data into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Tokenize text data
tokenizer = Tokenizer()
tokenizer.fit_on_texts(X_train)
X_train = tokenizer.texts_to_sequences(X_train)
X_test = tokenizer.texts_to_sequences(X_test)
vocab_size = len(tokenizer.word_index) + 1
max_len = max(len(seq) for seq in X_train)

# Pad sequences to ensure uniform length
X_train = pad_sequences(X_train, maxlen=max_len)
X_test = pad_sequences(X_test, maxlen=max_len)

# Define model architecture
embedding_dim = 50  # Dimensionality of the embedding vector
num_classes = len(label_encoder.classes_)
model = Sequential()
model.add(Embedding(input_dim=vocab_size, output_dim=embedding_dim, input_length=max_len))
model.add(Flatten())
model.add(Dense(64, activation='relu'))
model.add(Dense(num_classes, activation='softmax'))

# Compile the model
model.compile(optimizer='adam', loss='sparse_categorical_crossentropy', metrics=['accuracy'])

# Train the model
model.fit(X_train, y_train, epochs=10, batch_size=32, validation_data=(X_test, y_test))

# Evaluate on test data
loss, accuracy = model.evaluate(X_test, y_test)
print(f'Test accuracy: {accuracy}')

# Example of predicting a new food item category
new_food_item = ["Freshly caught salmon"]
new_food_item_seq = tokenizer.texts_to_sequences(new_food_item)
new_food_item_padded = pad_sequences(new_food_item_seq, maxlen=max_len)
predicted_probabilities = model.predict(new_food_item_padded)
predicted_category_index = np.argmax(predicted_probabilities, axis=-1)
predicted_category_label = label_encoder.inverse_transform(predicted_category_index)
print(f'Predicted category: {predicted_category_label}')