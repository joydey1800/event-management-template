// Scroll function courtesy of Scott Dowding; http://stackoverflow.com/questions/487073/check-if-element-is-visible-after-scrolling

 $(document).ready(function() {
//animation index page code
for(var i=0;i<4;i++){
var a =  $("section:eq("+ i +")");
color(a);
}
 function color(a)
 {
var window_height = $(window).height();
var window_width = $(window).width();
//console.log("window_height: " + window_height);
var section_one_offset = a.offset().top;
console.log("section_one_offset: " + section_one_offset);
var section_one_height = a.outerHeight();
var section_one_bottom = section_one_offset + section_one_height;
console.log("section_one_bottom: " + section_one_bottom);

 if(window_height < 670){
a.addClass('fadeOut');
 }
 if((window_height > 670)&&(window_height < 830)){
 a.addClass('fadeIn');
}
 $(window).on("scroll resize",function(){
var window_scroll_position = $(window).scrollTop();
var window_scroll_bottom_position = window_scroll_position + window_height;
 //console.log("window_scroll_bottom_position:"+ window_scroll_bottom_position);
 //console.log("window scroll position: " + window_scroll_position);


 if(window_height < 670){
   if((window_scroll_position > (section_one_offset-170)) && (window_scroll_bottom_position < section_one_bottom)){
   //  console.log("true");
       a.removeClass('fadeOut');
     a.addClass('fadeIn');
    }
 }
 if((window_height > 670)&&(window_height < 830)){
  if((window_scroll_position > section_one_offset) && (window_scroll_bottom_position < section_one_bottom)){
   //  console.log("true");
     a.removeClass('fadeOut');
     a.addClass('fadeIn');
   }
 }
  });
  }
//animation index page code end//




//experience image slider code//
var win_width = $(window).width();
var main_box_width = $(".main_box").width();
var layout_box_all = $(".layout_box");
var ex_card = $(".ex_card");
layout_box_all.css("width",main_box_width * 5);
ex_card.css("width",layout_box_all.width() / 5);

var card_no = 0;

  $('#increase').click(function(){
  if(card_no < 4){
    card_no++;
    if(card_no == 4){
      $('#increase').animate({opacity: 0});
    }else{
        $('#increase').animate({opacity: 1});
    }
    if(card_no == 0){
      $('#decrease').animate({opacity: 0});
    }else{
        $('#decrease').animate({opacity: 1});
    }

    var item_width_two= $('.ex_card').width();
    var pixal_moved_two = item_width_two * card_no;
    layout_box_all.animate({
      marginLeft: -pixal_moved_two
    })
    $(".ex_card:eq("+card_no+")").addClass("jackInTheBox");
    $(".ex_card:eq("+(card_no-1)+")").removeClass("jackInTheBox");
  }
  });
  $('#decrease').click(function(){
    if(card_no > 0){
      card_no--;
      if(card_no == 0){
        $('#decrease').animate({opacity: 0});
      }else{
          $('#decrease').animate({opacity: 1});
      }
      if(card_no == 4){
        $('#increase').animate({opacity: 0});
      }else{
          $('#increase').animate({opacity: 1});
      }

      var item_width_two = $('.ex_card').width();
      var pixal_moved_two = item_width_two * card_no;
      layout_box_all.animate({
        marginLeft: -pixal_moved_two
      });
      $(".ex_card:eq("+card_no+")").addClass("jackInTheBox");
        $(".ex_card:eq("+(card_no+1)+")").removeClass("jackInTheBox");
    }
    });
//experience image slider code//
});
