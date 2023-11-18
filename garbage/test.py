import streamlit as st
import pandas as pd

st.write("""
# My first app
Hello *world!*""")

number = st.slider('Pick a number', 0, 100)
with st.container():
    col1, col2 = st.columns(2)
    with col1:
        color = st.color_picker('Pick a color', '#00f900', key='color')
    #add another color to the color picker
    with col2: 
        color2 = st.color_picker('', '#00f900', key='color2')

with st.container():
    color3 = st.color_picker('Pick a color', '#00f900', key='color3')
