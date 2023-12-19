var height = $(window).height();
            
            $("#heading").css("textAlign", "center").css("color", "blue").css("textShadow", "3px 3px 3px white").css("fontSize", "30px").css("position", "relative").css("backgroundPositionY", "bottom");
            $("#heading").css("left", "-500px").css( "top", height)
            $("#heading").animate({"left": "0%", "top": "50px", "fontSize": "70px"}, 1200)
            
            $("body").css("backgroundColor", "gray").css("margin", "5%").css("marginBottom", "100px");
            
            var myList=[];
            var myString = prompt("Pick some numbers (<=100) for a list (separate with ,)");
            myList= myString.split(',');
            console.log(myString)
            var e = $("<div></div>");
            listLength = myList.length;
            
            e.attr("id", "myid");
            $("body").append(e);
            var boxWidth= $("#myid").width();
            $("body").css("position", "absolute")
            $("#myid").css("height", "600px").css("backgroundColor", "white").css("position", "relative").css("verticalAlign", "bottom").css("display", "flex");
            $("#myid").css("padding", "30px").css("marginBottom", "100px")
            $("#myid").append("<h2>List of Values</h2>");
            $("#myDiv").css("paddingTop", "50px").css("paddingBottom", "50px").css("paddingLeft", "20px");
            $("button").css("marginLeft", "20px").css("height", "40px").css("width", "50px").css("fontWeight", "bold");
            //display the list
            var p = $("<div></div>");
            $("#myDiv").append(p);
            p.attr("id", "listNums");
            p.text("Values in list are: [" + myList + "]");
            p.css("fontSize", "2em").css("fontWeight", "bold")
            $("h2").css("textAlign", "center").css("position", "relative").css("marginLeft", "auto").css("textShadow", "3px 3px 3px darkGray").css("fontSize", "3em")
            var f;
            for(var i =0; i < myList.length; i++){
                f=$("<div></div>");

                $("#myid").append(f);
                f.append("<p>" + myList[i] + "</p>")
                
                f.attr("id", "valDiv" + i);
                
                f.css("borderStyle", "solid").css("boderWeight", "3px").css("height", (myList[i] -10) + "%").css("width", (boxWidth/ (listLength+1) )).css("position", "inLineBlock").css("bottom", "0").css("left", "0").css("float", "left").css("marginTop", "auto").css("marginBottom", "10px");
                if(myList[i] <= 10){
                    f.css("backgroundColor", "red").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                } 
                if(myList[i] >10 && myList[i]<= 20){
                    f.css("backgroundColor", "green").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                }
                if(myList[i] >20 && myList[i]<= 30){
                    f.css("backgroundColor", "gray").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                }
                if(myList[i] >30 && myList[i]<= 40){
                    f.css("backgroundColor", "orange").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                }
                if(myList[i] >40 && myList[i]<= 50){
                    f.css("backgroundColor", "blue").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                }
                if(myList[i] >50 && myList[i]<= 60){
                    f.css("backgroundColor", "yellow").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                }
                if(myList[i] >60 && myList[i]<= 70){
                    f.css("backgroundColor", "teal").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                }
                if(myList[i] >70 && myList[i]<= 80){
                    f.css("backgroundColor", "darkBlue").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                }
                if(myList[i] >80 && myList[i]<= 90){
                    f.css("backgroundColor", "lightGreen").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                } 
                if(myList[i] >90 && myList[i]<= 100){
                    f.css("backgroundColor", "purple").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                }
                
            }
            var g = $("<button>Sort</button>");
            g.attr("id", "sortButton");
            $("body").append(g);
            $("#sortButton").css("textAlign", "center").css("marginLeft", "auto").css("position", "relative").css("left", "45%").css("marginTop", "-50px").css("marginBottom", "50px").css("height", "60px").css("width", "90px").css("backgroundColor", "lightBlue").css("fontSize", "2em").css("borderRadius", "25%").css("borderWidth", "5px");
            $("body").css("position", "absolute" );

            var newList=[];
            var h;
            $("#sortButton").click(function(){
               
                myList.sort(function(a, b){return a-b});
                for(var j =0; j < myList.length; j++){
                    $("#valDiv" + j).animate({"height": (myList[j] - 10)+ "%"}, 1200);
                    if(myList[j] <= 10){
                        $("#valDiv" + j).css("backgroundColor", "red").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                        $("#valDiv" + j).text(myList[j]);
                } 
                if(myList[j] >10 && myList[j]<= 20){
                    $("#valDiv" + j).css("backgroundColor", "green").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                }
                if(myList[j] >20 && myList[j]<= 30){
                    $("#valDiv" + j).css("backgroundColor", "gray").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                }
                if(myList[j] >30 && myList[j]<= 40){
                    $("#valDiv" + j).css("backgroundColor", "orange").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                }
                if(myList[j] >40 && myList[j]<= 50){
                    $("#valDiv" + j).css("backgroundColor", "lightBlue").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                }
                if(myList[j] >50 && myList[j]<= 60){
                    $("#valDiv" + j).css("backgroundColor", "yellow").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                }
                if(myList[j] >60 && myList[j]<= 70){
                    $("#valDiv" + j).css("backgroundColor", "teal").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                }
                if(myList[j] >70 && myList[j]<= 80){
                    $("#valDiv" + j).css("backgroundColor", "blue").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                }
                if(myList[j] >80 && myList[j]<= 90){
                    $("#valDiv" + j).css("backgroundColor", "lightGreen").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                } 
                if(myList[j] >90 && myList[j]<= 100){
                    $("#valDiv" + j).css("backgroundColor", "purple").css("fontSize", "2em").css("textAlign", "center").css("fontWeight", "bold");
                    $("#valDiv" + j).text(myList[j]);
                    
                }
                }
                console.log(myList);
            })
                
            
           