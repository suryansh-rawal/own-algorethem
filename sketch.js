var car1,wall1;//declaring car1 and wall1
var car2,wall2;//declaring car2 and wall2
var car3,wall3;//declaring car3 and wall3

var car1speed;//declaring car1 speed
var car2speed;//declaring car2 speed
var car3speed;//declaring car3 speed
var car1mass,car2mass,car3mass ;//declaring car1,car2,car3 mass
var deformation;
var distribution1,distribution2,distribution3;
var dist1,dist2,dist3;

function preload(){

}

 function setup()
  { createCanvas(600,600);//creatingthe canvas

   for(i=0;i<=600;i=i+60){
      dist1=createSprite(i,100,30,10);
      dist1.shapeColor="white";
   }

   for(i=0;i<=600;i=i+60){
      dist2=createSprite(i,300,30,10);
      dist2.shapeColor="white";
   }

   for(i=0;i<=600;i=i+60){
      dist3=createSprite(i,500,30,10);
      dist3.shapeColor="white";
   }
      wall1=createSprite(500,100,30,80);//sprite for wall1
      car1=createSprite(100,100,20,20);//sprite for car1

      
      wall2=createSprite(500,300,30,80);//sprite for wall2
      car2=createSprite(100,300,20,20);//sprite for car2

      
      wall3=createSprite(500,500,30,80);//sprite for wall3
      car3=createSprite(100,500,20,20);//sprite for car3


      distribution1=createSprite(300,200,600,10);
      distribution1.shapeColor=("white");

      distribution2=createSprite(300,400,600,10);
      distribution2.shapeColor=("white");

      distribution3=createSprite(300,600,600,10);
      distribution3.shapeColor=("white");
     
      
      
      

car1mass =Math.round(random(100,1000));// declaring car1 mass
car2mass =Math.round(random(100,1000));// declaring car2 mass
car3mass =Math.round(random(100,1000));// declaring car3 mass


       car1speed =Math.round(random(30,40));//declaring random speed for car1
       car2speed =Math.round(random(55,40));//declaring random speed for car2
       car3speed =Math.round(random(55,40));//declaring random speed for car3
       

       car1.shapeColor="blue";// giving color to our car1
        wall1.shapeColor="#290002";// giving color to our wall1

        car2.shapeColor="blue";// giving color to our car1
        wall2.shapeColor="#290002";// giving color to our wall2

        car3.shapeColor="blue";// giving color to our car1
        wall3.shapeColor="#290002";// giving color to our wall3

         

         car1.velocityX=car1speed;// setting car1 velocityX
          wall1.velocityX=0 ;// setting wall1 velocityX

          car2.velocityX=car2speed;// setting car2 velocityX
          wall2.velocityX=0 ;// setting wall2 velocityX

          car3.velocityX=car3speed;// setting car3 velocityX
          wall3.velocityX=0 ;// setting wall3 velocityX
        }
         function draw()
         { 
           background('#2e2e2e');// color of our background
            console.log(car1.x-wall1.x);//distance between two objects

               //setting collide property for car1 and wall1
             if(car1.x-300-wall1.x < wall1.width/2+car1.width/2 && wall1.x-car1.x < wall1.width/2+car1.width/2 )
              { car1.velocityX=car1.velocityX*(0);
               
                deformation  =0.5*car1speed*car1speed*car1mass/22509;
                
               if(deformation>15){
                  car1.shapeColor=("red");
               }
               if(deformation<15 && deformation>10){
                  car1.shapeColor=("yellow");
               }
               if( deformation<10){
                  car1.shapeColor=("green");
               }
              

                 wall1.velocityX=wall1.velocityX*(0) }
               if(car1.y-wall1.y < wall1.height/2+car1.height/2
                 && wall1.y-car1.y < wall1.height/2+car1.height/2 )
                  { 


                     car1.velocityY=car1.velocityY*(0);
                     

                     wall1.velocityY=wall1.velocityY*(0)
                     } 






                           //setting collide property for car2 and wall2

                     if(car2.x-wall2.x < wall2.width/2+car2.width/2 && wall2.x-car2.x < wall2.width/2+car2.width/2 )
              { 
                 car2.velocityX=car2.velocityX*(0);

                 var car2deformation  =0.5*car1speed*car1speed*car1mass/22509;
                 console.log(deformation);
                if(car2deformation>15){
                   car2.shapeColor=("red");
                }
                if(car2deformation<15 && deformation>10){
                   car2.shapeColor=("yellow");
                }
                if( car2deformation<10){
                   car2.shapeColor=("green");
                }
                
                 wall2.velocityX=wall2.velocityX*(0) }

                 if(car2.y-wall2.y < wall2.height/2+car2.height/2
                  && wall2.y-car2.y < wall2.height/2+car2.height/2 )
                   { car2.velocityY=car2.velocityY*(0)
                      wall2.velocityY=wall2.velocityY*(0)
                      } 




                        //setting collide property for car and wall3
                      if(car3.x-wall3.x < wall3.width/2+car3.width/2 && wall3.x-car3.x < wall3.width/2+car3.width/2 )
                      {
                         
                        car3.velocityX=car3.velocityX*(0)
                        var deformation3= 0.5*car3speed*car3speed*car3mass/22509; 
                        if(deformation3>15){
                        car3.shapeColor="red";   
                        }
                        if(deformation3<15&&deformation>10){
                           car3.shapeColor="yellow";   
                           }
                           if(deformation3<10){
                              car3.shapeColor="green";   
                              }
                       
                         wall3.velocityX=wall3.velocityX*(0) }

                         if(car3.y-wall2.y < wall3.height/2+car3.height/2
                          && wall3.y-car3.y < wall3.height/2+car3.height/2 )
                           { car3.velocityY=car3.velocityY*(0)
                              wall3.velocityY=wall3.velocityY*(0)
                              } 
 


                      drawSprites();
                     }
                     