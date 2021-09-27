# Chord_files

## Demo


## Description
This project is a chord progression generator that I wanted to do for a while to aid me in composing melodies more seamlessly. It started as a simple Python script but during my music theory research I found out that [Chord_Files](https://www.chordfiles.com/) was a thing. Not wanting to spend money on it gave me the challenge to reverse engineering it, resulting in a fully digital version of it, as functionally and estetically close to the original as possible.

I decided to translate the Python script (that generated the Major Triad, Secondary Dominants and Aeolian Scale of the respective selected root note) to Javascript and while I was at it, decided to learn React along the way. The script originally dealt with all the quality of chords (Major, Minor, 7th and diminished), but once I decided to make a full version of chord_files, I had to scrap a lot of the code since I only needed te main note. Also, had to practice my web development skills, the code base might be a little messy and in need of polishing.

## How to use it

Just as the original creators intended it: 
[![Find unique chord progressions and melodies with chord_files. 🎸](http://img.youtube.com/vi/WhkV-YRiR8k&ab_channel=chordfiles/0.jpg)](http://www.youtube.com/watch?v=WhkV-YRiR8k&ab_channel=chordfiles)

Slide the left bar up and down to change the root note, the right bar is just for estetic purposes.

## How to run

Clone repository and run `npm start`.


