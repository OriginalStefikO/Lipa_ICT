byte pot_pin = A0;        //byte je hodnota od 0-255, pin A0 a další analogové piny můžeme použít taky
byte red_pin = 5;        //pin pro červenou ledku

int pot_val;            //proměnná pro hodnotu potenciometru

void setup() {
  Serial.begin(9600);              //zapneme sériovou linku, později tam vypisujeme hodnotu potenciometru
  pinMode(red_pin, OUTPUT);       //nastavíme pin červené ledky jako výstupní
}

void loop() {
  pot_val = analogRead(pot_pin);        //přečteme a zapíšeme hodnotu potenciometru do naší předem připravené proměnné
  Serial.println(pot_val);             //vypíšeme hodnotu do sériové linky (můžeme se na ni podívat na pc)
  analogWrite(red_pin, pot_val/4);    //dáme hodnotu potenciometru jako hodnotu ledky, dělíme čtyřma protože ledka chce hodnotu 0-255 ale potenciometr má hodnotu 0-1024
  delay(100);                        //počkáme desetinu sekundy
}
