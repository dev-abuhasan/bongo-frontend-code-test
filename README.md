# Bongo Frontend Code Test


### Details

 #### **`index.ts`**
``` js
//This file contains the answers to the following questions 
/**
    1) Write a function that detects if two strings are an anagram e.g. 
        ‘bleat’ and ‘table’ are anagrams but ‘eat’ and ‘tar’ are not.
    2) Explain the design pattern used in following:
        interface Vehicle {
            int set_num_of_wheels()
            int set_num_of_passengers()
            boolean has_gas()
        }
        a) Explain how can you use the pattern to create car and plane class?
        b) Use a different design pattern for this solution. 
*/
```

### Video Application

 #### **`./videoViewer/index.html`**
``` html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bongo Video Player</title>
    <link rel="shortcut icon" href="#">
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <main id="main">
        <video width="600" id="video" controls="controls">
            <source src="abuPortFolio.mp4" type="video/mp4">
        </video>
        <div class="btnGrp">
            <button id="playPause" class="playPauseBtn commonBtn">Play</button>
            <button id="forward" class="commonBtn">Forward &gt;&gt;</button>
            <button id="rewind" class="commonBtn">&lt;&lt; Rewind</button>
        </div>
    </main>
</body>

<script src="video.js"></script>

</html>
```