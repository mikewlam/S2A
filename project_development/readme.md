[Weird Bezier thing](https://mikewlam.github.io/S2A/project_development/Outcome_byNoiseBezier_DSHIFFMAN/index.html)</br>
[Noise Loop](https://mikewlam.github.io/S2A/project_development/NoiseLoop/index.html)</br>
[Iteration-1st October](https://mikewlam.github.io/S2A/project_development/MainScript/index.html)</br>
[Iteration-8th October](https://mikewlam.github.io/S2A/project_development/sketch_01_update8_Oct/index.html)</br>
[Iteration-12th October](https://mikewlam.github.io/S2A/project_development/sketch_01_update8_Oct/project_sound/index.html)


Base code for visual outcome. Introduced by Daniel Shiffman on https://www.youtube.com/watch?v=ZI1dmHv3MeM

```
  for (let a = 0; a < TWO_PI; a+=0.01){
    xoff = map(cos(a+phase), -1, 1, 0, 200);
    yoff = map(sin(a), -1, 1, 0, 200);
    let r = map(noise(xoff, yoff, zoff), 0, 1, -800, windowHeight*0.6);
    let x = r * cos(a);
    let y = r * sin(a);
    point(x, y);
```
