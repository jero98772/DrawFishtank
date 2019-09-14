#include <WiFi.h>

const char* ssid     = "feria_ciencias_volumenes";


WiFiServer server(80);

String header;

void setup() {
  Serial.begin(115200);

  Serial.print("Setting AP (Access Point)…");
  WiFi.softAP(ssid);

  IPAddress IP = WiFi.softAPIP();
  Serial.print("AP IP address: ");
  Serial.println(IP);

  server.begin();
}

void loop() {
  WiFiClient client = server.available();   
  if (client) {                            
    Serial.println("New Client.");          
    String currentLine = "";              
    while (client.connected()) {          
      if (client.available()) {            
        char c = client.read();             
        Serial.write(c);                   
        header += c;
        if (c == '\n') {                  
          
          if (currentLine.length() == 0) {

            client.println("HTTP/1.1 200 OK");
            client.println("Content-type:text/html");
            client.println("Connection: close");
            client.println();


            client.println("<!DOCTYPE html><html>");
            client.println("<head>   <meta charset='UTF-8'> <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\"><script type='text/javascript'>");
            client.println("var wwwof ='word wide web of fish';document.write('<center><p><h3>wwwof<h3></p><b><h2>',wwwof,'</h2><b></center>') ;");
            client.println("let canvas,texto_lado1,texto_lado2,texto_lado3,figura, entrada_lado_1,entrada_lado_2,entrada_lado_3,cubica,prisma_rectangular,prisma_triangular,parrafo,Select,selected,select,l,r,R,w,h,litros ,acuarium,angle,y,x,half_torus,torusVOL,radius1,radius2,fishtank_classic,cilindro,perimetro;");
            client.println("let minisegundos=100;");
            client.println("PI=Math.PI");
            client.println("function calcular_litros() {");
            client.println("figura=document.getElementById('figura');texto_lado1=document.getElementById('lado01');texto_lado2=document.getElementById('lado02');texto_lado3=document.getElementById('lado03');");
            client.println("entrada_lado_1=document.getElementById('entrada_lado_1');entrada_lado_2=document.getElementById('entrada_lado_2');entrada_lado_3=document.getElementById('entrada_lado_3');");
            client.println("parrafo=document.getElementById('parrafo');Select = document.From2.Selecion2;Select=document.getElementById('Selecion1');selected = Select.options[Select.selectedIndex].value;");
            client.println("if (selected=='prisma_rectangular') {l=parseFloat(entrada_lado_1.value);w=parseFloat(entrada_lado_2.value);h=parseFloat(entrada_lado_3.value);litros=(l*h*w)/1000;parrafo.innerHTML=litros+' litros ';figura.innerHTML='prisma_rectangular';texto_lado1.innerHTML='largo cm';texto_lado2.innerHTML='alto cm';texto_lado3.innerHTML='ancho cm';}");
            client.println("if (selected=='cubica'){l=parseFloat(entrada_lado_1.value);litros=(l**3)/1000;figura.innerHTML='cubica';texto_lado1.innerHTML='largo (solamente) cm ';texto_lado2.innerHTML='no es neseario';texto_lado3.innerHTML='no es neseario';parrafo.innerHTML=litros+' litros ';}");
            client.println("if (selected=='prisma_triangular'){  b=parseFloat(entrada_lado_1.value); Hbase=parseFloat(entrada_lado_2.value); h=parseFloat(entrada_lado_3.value); litros=((b*Hbase)/2)*h; litros= litros/1000;  texto_lado1.innerHTML='largo base cm';  texto_lado2.innerHTML='altura de la base cm'; texto_lado3.innerHTML='altura 3 cm';  parrafo.innerHTML=litros+'litros'+'<h1>dibuja el lado 1</h1>';dibujar_prisma(b,h,3);}");
            client.println("if (selected=='cilindro'){R=parseFloat(entrada_lado_1.value);h=parseFloat(entrada_lado_2.value);litros=(R**2)*h;litros=  litros/1000;texto_lado1.innerHTML='radio cm';texto_lado2.innerHTML='alto cm';texto_lado3.innerHTML='no es neseario';parrafo.innerHTML=litros+'PI litros ';}}");
            client.println("</script><title>wwwof calcular litros litrers</title></head><body >");
            client.println("<p id='figura'> figura<p><form id='From1' name='From2' >");
            client.println("<p id='lado01'>lado 1<p><input type='text' id='entrada_lado_1'>");
            client.println("<p id='lado02'>side 2<p><input type='text' id='entrada_lado_2'>");
            client.println("<p id='lado03'>side 3<p><input type='text' id='entrada_lado_3'>");
            client.println("<br><select id='Selecion1' name='Selecion2'><option id='prisma_rectangular ' value='prisma_rectangular'>prisma_rectangular</option><option id='cubica' value='cubica'>cubica</option>");
            client.println("  <option id='prisma_triangular ' value='prisma_triangular'>prisma_triangular</option><option id='cilindro' value='cilindro'>cilindro</option></select>");
            client.println("<br><br><input type='button' onclick='calcular_litros()' value='calcular'><p id='parrafo' ></p>");
            client.println("</form>unidades Litros (L), centimetros (cm)</body></html>");
            client.println("");
            client.println("");
            client.println("</body></html>");
            client.println();
            break;
            currentLine = "";
          }
        } else if (c != '\r') {  
          currentLine += c;      
        }
      }
    }
    header = "";
    client.stop();
    Serial.println("Client disconnected.");
    Serial.println("");
  }
}
