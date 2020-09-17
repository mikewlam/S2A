# W7_11.09.2020

## PROJECT UPDATE
<img width="814" alt="Screen Shot 2020-09-18 at 8 37 23 am" src="https://user-images.githubusercontent.com/68724434/93535399-36e4f880-f98a-11ea-9b5e-a0141754ce21.png">
</br> 
<src img =https://github.com/mikewlam/S2A/blob/master/WK7/semantictextual.png>
</br>
A direction that I could possibly take is a text input by user option. This would require an API of some sort or using RunwayML to generate some outputs. I've found that google has a pre-trained setence encoder where texts can be converted into a series of vector data. I thought this could be have the potential to generate some sort of visualizer. I thought potentially a mosaic tile with different colors depending on the vector information could be interesting. Touches on the visualization of words but also a simple system for generating the outcome.</br>

## GENERATIVE TYPOGRAPHY (Tutorial)

###### Summary

Lots of helping learnings in this tutorial. </br>
* Class, *A set of attributes applied to more than one thing*
* Constructor *(Allow new members of the class to be recognized)*
* this.variable = variable *(isolates the mentioned variable)*
* For () Loop. *i=0 first on the list, i<wigglyLetters.length while i is less than length of wiggly letters, i++ do the next one.
* function keyTyped () *Let's your input text dependent on what user types, with letter display as **key***
* += *= -= *All lets your add/multiply/substract the value following to the variable in front.

![Screen Shot 2020-09-14 at 10 20 11 pm](https://user-images.githubusercontent.com/68724434/93153948-c6e63080-f745-11ea-9b94-5a5cb65a3109.png)</br>
![Screen Shot 2020-09-14 at 11 55 53 pm](https://user-images.githubusercontent.com/68724434/93153966-d2d1f280-f745-11ea-84ad-3d38f4f366f6.png)

I made some customization to the code to draw new colors individually with every display of characters and also added a If/Else parameter to restrict the letters from falling off the window dimension.

If (xposition < 0 && yposition <0)</br>
  this.x += this.speed</br>
  this.y += this.speed</br>
} else if (xposition > windowWidth && yposition >windowHeight)</br>
  this.x += -this.speed</br>
  this.y += -this.speed</br>


## PROJECT PROTOTYPE
###### SOME VERSIONS OF WHAT IT COULD LOOK LIKE?
![Prototype-1](https://user-images.githubusercontent.com/68724434/93170351-759c6800-f76a-11ea-81af-bd13054d08c3.gif)</br>
One of the direction I want to take my project is down the path of is a 'text to shape' generative system. It came from the discovery of regular expression and metacharacters. I thought if there was a way to use this to search words, maybe there could be a way to identify the word based on its metacharacters to then use that as an input to generate outcomes. This would translate the idea of shifting the structure of words into shapes. Blurring the lines of system that makes up our language. This was somewhat also influenced by [jannis maroscheck's work](https://github.com/mikewlam/S2A/tree/master/WK3). </br>




## PSEUDOCODES
###### EXAMPLES

START</br>
Function "PLANT CARE"</br>
INPUT Days</br>
IF DAYS < 7</br>
  Check Tomorrow;</br>
ELSE IF DAYS > 7 && DAYS < 30</br>
  Water Plants;</br>
ELSE IF DAYS > 30</br>
  Fertilize;</br>
  Water Plants;</br>
END IF</br>





