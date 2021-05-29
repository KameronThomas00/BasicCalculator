$(document).ready(function(){
$('#one').click(function(){
    document.forms.display.value += 1;
});
})

$(document).ready(function(){
$('#two').click(function(){
document.forms.display.value += 2;
});
})
    
$(document).ready(function(){
$('#three').click(function(){
document.forms.display.value += 3;
});
})      

$(document).ready(function(){
$('#four').click(function(){
document.forms.display.value += 4;
});
}) 

$(document).ready(function(){
$('#five').click(function(){
document.forms.display.value += 5;
});
}) 

$(document).ready(function(){
$('#six').click(function(){
document.forms.display.value += 6;
});
}) 

$(document).ready(function(){
$('#seven').click(function(){
document.forms.display.value += 7;
});
})
    
$(document).ready(function(){
$('#eight').click(function(){
document.forms.display.value += 8;
});
})
        
$(document).ready(function(){
$('#nine').click(function(){
document.forms.display.value += 9;
});
})      
    
$(document).ready(function(){
$('#zero').click(function(){
document.forms.display.value += 0;
});
}) 
    
$(document).ready(function(){
$('#plus').click(function(){
document.forms.display.value += "+";
});
}) 
    
$(document).ready(function(){
$('#subtract').click(function(){
document.forms.display.value += "-";
});
})

$(document).ready(function(){
$('#divide').click(function(){
document.forms.display.value += "/";
});
}) 
        
$(document).ready(function(){
$('#multiply').click(function(){
document.forms.display.value += "*";
});
})

$(document).ready(function(){
$('#decimal').click(function(){
document.forms.display.value += ".";
});
})


$('#equal').click(function(){
    if (display.value == ""){
        alert("Please enter number into calculator!")
    }else{
        document.forms.display.value = eval(document.forms.display.value);
    }
})

$('#clear').click(function(){
    document.forms.display.value = "";
});

