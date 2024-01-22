function intialization(){
    var html = document.getElementById("html");
    var css = document.getElementById("css");
    var js = document.getElementById("js");
    var output = document.getElementById("code").contentWindow.document;
    document.body.onkeyup = function(){
        output.open();

        output.writeln( // for showing the code in outputt box
            html.value + 
            
            "<style>" + css.value + "</style>" +


            "<script>" + js.value + "</script>"
        )
   
        output.close();
    }
}
intialization()