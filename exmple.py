import tkinter as tk
from tkinter import filedialog
from tkinter import messagebox

# Functionality for each button
def upload_dataset():
    file_path = filedialog.askopenfilename(title="Select a Dataset", filetypes=[("CSV files", "*.csv"), ("All files", "*.*")])
    if file_path:
        output_text.set(f"Dataset uploaded: {file_path}")

def preprocess_data():
    output_text.set("Preprocessing data...")

def data_splitting():
    output_text.set("Splitting data into features and target...")

def train_test_splitting():
    output_text.set("Performing train-test split...")

def existing_algorithm():
    output_text.set("Running existing algorithm...")

def proposed_algorithm():
    output_text.set("Running proposed algorithm...")

def prediction_on_test_data():
    output_text.set("Predicting on test data...")

# Create the main Tkinter window
root = tk.Tk()
root.title("Machine Learning Workflow GUI")
root.geometry("600x400")

# Title Label
title_label = tk.Label(root, text="Machine Learning Workflow", font=("Arial", 18, "bold"))
title_label.pack(pady=10)

# Buttons and their functionalities
button_frame = tk.Frame(root)
button_frame.pack(pady=20)

buttons = [
    ("Upload Dataset", upload_dataset),
    ("Preprocess Data", preprocess_data),
    ("Data Splitting", data_splitting),
    ("Train-Test Splitting", train_test_splitting),
    ("Existing Algorithm", existing_algorithm),
    ("Proposed Algorithm", proposed_algorithm),
    ("Prediction on Test Data", prediction_on_test_data),
]

for text, command in buttons:
    btn = tk.Button(button_frame, text=text, font=("Arial", 12), width=25, command=command)
    btn.pack(pady=5)

# Output display
output_text = tk.StringVar()
output_label = tk.Label(root, textvariable=output_text, font=("Arial", 14), wraplength=500, justify="center", fg="blue")
output_label.pack(pady=20)

# Run the Tkinter event loop
root.mainloop()
