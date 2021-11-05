# sliderOnMobileOnly


Sometimes slider is required on mobile only So here is code you can use it for create slider on mobile

Follow these Steps

Rule: 1: Add the jquery CDN or file in your website's root file where you add all the stylesheet and scriot file. I would suggest put jquery cdn or local file before closing body tag. Like this -

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
</body>

Rule 2: Add Slick.js cdn right under jquery file. Like this-

<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick.min.js" integrity="sha512-XtmMtDEcNz2j7ekrtHvOVR4iwwaD6o/FUJe6+Zq+HgcCsk3kj4uSQQR8weQ2QVj1o0Pk6PwYLohm206ZzNfubg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
</body>

Rule 3: Add Slick.css file in head tag. Like this-

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.8.1/slick-theme.css" integrity="sha512-6lLUdeQ5uheMFbWm3CP271l14RsX1xtx+J5x2yeIDkkiBpeVTNhTqijME7GgRKKi6hCqovwCoBTlRBEC20M8Mg==" crossorigin="anonymous" referrerpolicy="no-referrer" />
</head>

Rule 4: Now copy the script from above file and paste in your main script file where you write your custom script code. 

Rule 5: Now change the class name with your slider class name. That's it.

If you get any issues let me know. 
