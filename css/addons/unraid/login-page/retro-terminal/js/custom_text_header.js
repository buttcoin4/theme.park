
 //Custom Text Header //
 // ACSII slant font

// Needs to be inside <section id="login" class="shadow">
// YOU MUST ESCAPE ANY SINGLE BACKSLASHES LIKE SO: \\

let custom_text_header = `
<div class="custom-text-header"> <pre>                     __                             ___       __  
  _____ _____ ____  __  __ ___ _   _    _    _     
 |_   _| ____|  _ \|  \/  |_ _| \ | |  / \  | |    
   | | |  _| | |_) | |\/| || ||  \| | / _ \ | |    
   | | | |___|  _ <| |  | || || |\  |/ ___ \| |___ 
   |_| |_____|_| \_\_|  |_|___|_| \_/_/   \_\_____|
                                                   
                                                                 </pre> </div>
`;
document.getElementById("login").innerHTML += custom_text_header
