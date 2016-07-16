        $("section.content .productRightCol .btnGetInfo").click(function(){
          $("body").animate(3000).scrollTop(0);
          $(".mainWrapper").addClass("blur");
          $("#modal").fadeIn();
        });
        //$("section.content .leftCol li.active").prev().css("border-radius", "0 5px 0 0");
        //$("section.content .leftCol li.active").next().css("border-radius", "5px 0 0 0");
        $("#modal .close").click(function(){
          $("#modal").fadeOut();
          $(".mainWrapper").removeClass("blur");
        });

         $(".showLeftMenu").click(function(){
          $("section.content .leftCol").addClass("active").css("left","0");
          $(".showLeftMenu").css("left",$(".leftCol").width()).fadeOut();
        });

        $(".hideLeftMenu").click(function(){
          $("section.content .leftCol").removeClass("active").css("left","-999px");
          $(".showLeftMenu").css("left", "0").fadeIn("");
        });

        $(".productsList li a").hover(function(){
          $(".rightCol li").removeClass("active");
          var str       =   $(this).attr("data-target");
          var strArr    =   [];
          strArr        =   str.split(",");
          console.log($(this).attr("target"));
          for(i=0; i <= strArr.length;i++){
            $(".rightCol li").each(function(){
              if($(this).attr("target") == strArr[i]){
                $(this).addClass("active");
              }
            })
          }
        });


