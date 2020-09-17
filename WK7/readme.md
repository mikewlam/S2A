# W7_11.09.2020

## PROJECT UPDATE
![MindmapAgain](https://user-images.githubusercontent.com/68724434/93020497-c6a04500-f620-11ea-8a37-41eb88f20f61.png)

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
One of the direction I want to take my project is down the path of is a 'text to shape' generative system. It came from the discovery of regular expression and metacharacters. I thought if there was a way to use this to search words, maybe there could be way to identify the word based on its metacharacters to then use that as an input to generate outcomes with This would be a direct translate the idea of word strcutrues into a visual shape. Blurring the lines of system that makes up our language. This was somewhat also influenced by [jannis maroscheck's work (https://github.com/mikewlam/S2A/tree/master/WK3). </br>
**A POTENTIAL SYSTEM COULD LOOK LIKE**

![prototype-2](https://user-images.githubusercontent.com/68724434/93170357-78975880-f76a-11ea-8a83-f149d550c767.gif)</br>
XYZ</br>


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





