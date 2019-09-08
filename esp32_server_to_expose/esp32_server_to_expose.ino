#include <WiFi.h>

// Replace with your network credentials
const char* ssid     = "feria_ciencias_volumenes";


// Set web server port number to 80
WiFiServer server(80);

// Variable to store the HTTP request
String header;

// Auxiliar variables to store the current output state


// Assign output variables to GPIO pins

void setup() {
  Serial.begin(115200);
  // Initialize the output variables as outputs
  // Set outputs to LOW

  // Connect to Wi-Fi network with SSID and password
  Serial.print("Setting AP (Access Point)…");
  // Remove the password parameter, if you want the AP (Access Point) to be open
  WiFi.softAP(ssid);

  IPAddress IP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(IP);
  
  server.begin();
}

void loop(){
  WiFiClient client = server.available();   // Listen for incoming clients

  if (client) {                             // If a new client connects,
    Serial.println("New Client.");          // print a message out in the serial port
    String currentLine = "";                // make a String to hold incoming data from the client
    while (client.connected()) {            // loop while the client's connected
      if (client.available()) {             // if there's bytes to read from the client,
        char c = client.read();             // read a byte, then
        Serial.write(c);                    // print it out the serial monitor
        header += c;
        if (c == '\n') {                    // if the byte is a newline character
          // if the current line is blank, you got two newline characters in a row.
          // that's the end of the client HTTP request, so send a response:
          if (currentLine.length() == 0) {
            // HTTP headers always start with a response code (e.g. HTTP/1.1 200 OK)
            // and a content-type so the client knows what's coming, then a blank line:
            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println("Connection: close");
            client.println();
            
            // turns the GPIOs on and off
            
            // Display the HTML web page
            client.println("<!DOCTYPE html><html>");
            client.println("<head>   <meta charset='UTF-8'> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">");
            client.println("<script type='text/javascript'>");
            
            client.println("var wwwof ='word wide web of fish';");
            client.println("document.write('<center><b><h2>',wwwof,'</h2><b></center>') ;");
            client.println("let canvas ,large,heigh,width,cubic,rectangle, paragraph,Select,selected,select;");
            client.println("let l,r,R,w,h,PI,liters ,acuarium, half_torus,torusVOL,radius1,radius2,fishtank_classic,cylinder;");
            client.println("function sumitliters() {large=document.getElementById('side1');width=document.getElementById('side2');heigh=document.getElementById('side3');");
            client.println("cubic=document.getElementById('cubic');rectangle=document.getElementById('rectangle');paragraph=document.getElementById('paragraph');");
            client.println("Select = document.From2.Select2;Select=document.getElementById('Select1');selected = Select.options[Select.selectedIndex].value;");
            client.println("if (selected=='rectangle') {l=parseFloat(large.value);w=parseFloat(width.value);h=parseFloat(heigh.value);liters=(l*h*w)/1000;console.log(liters);paragraph.innerHTML=liters;}");
            client.println("if (selected=='cubic'){h=parseFloat(heigh.value);liters=(h**3)/1000;console.log(liters);paragraph.innerHTML=liters;}");
            client.println("if (selected=='fishtank_classic'){radius1=parseFloat(large.value);Pi=Math.PI;R=radius1;radius2=parseFloat(width.value);r=radius2;h=parseFloat(heigh.value);torusVOL=2*Pi*R*(r**2);half_torus=torusVOL/2;cylinder=Pi*(R**2)*h;fishtank_classic=cylinder+half_torus;liters=fishtank_classic/1000;paragraph.innerHTML=liters}");
            client.println("if (selected=='prima_tirangular'){H=parseFloat(large.value);b=parseFloat(width.value);h=parseFloat(heigh.value);liters=((h*b)/2)*H;paragraph.innerHTML=liters;}}");
            // Web Page Heading
            
            client.println("</script></head><body><h1>feria cienias de calcular volumen <br> por Daniel Arango y Daniel Londoño</h1>");
            client.println("<form id='From1' name='From2' ><br>side1  <input type='text' id='side1'><br>side 2<input type='text' id='side2'><br>side 3<input type='text' id='side3'>");  
            client.println("<select id='Select1' name='Select2'><option id='rectangle' value='rectangle'>rectangle</option><option id='cubic' value='cubic'>cubic</option>");
            client.println("<option id='fishtank_classic' value='fishtank_classic'>fishtank_classic</option><option id='prima_tirangular' value='prima_tirangular'>triangular prism</option></select>");
            client.println("<br><br><input type='button' onclick='sumitliters()' value='sumit'><p id='paragraph' ></p></form><br>units Liters (L), centimeters (cm)");
            client.println("<table border='2'><tr><td>objet </td><td>side 1 </td><th>side 2 </th><th>side 3 </th><th>show draw </th></tr>");
            client.println("<tr><td>fishtank_classic  </td><td>big radio r  </td><th>small radio R </th><th>heigth h </th><th>true</th></tr>");
            client.println("<tr><td>cubic </td><th>large not needed</th><td>width not needed</td><th>heigth  needed   </th><th>true</th></tr>");
            client.println("<tr><td>rectangular prism </td><th>large </th><td>width</td>   <th>heigth    </th><th>true</th></tr>");
            client.println(" <tr><td>triangular prism  </td><td>heigth in z axis   </td><th>base </th><th>heigth in x and y axis   </th><th>false</th></tr></table>  ");
            client.println("");
            client.println("");
            client.println("</body></html>");
            
            // The HTTP response ends with another blank line
            client.println();
            // Break out of the while loop
            break;
          } else { // if you got a newline, then clear currentLine
            currentLine = "";
          }
        } else if (c != '\r') {  // if you got anything else but a carriage return character,
          currentLine += c;      // add it to the end of the currentLine
        }
      }
    }
    // Clear the header variable
    header = "";
    // Close the connection
    client.stop();
    Serial.println("Client disconnected.");
    Serial.println("");
  }
}
