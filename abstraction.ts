/**
 * ----------OOP Abstraction----------
   1. Abstraction using interface
   2. Abstraction using abstract class
 */
// --------- using Interface -------------

interface MediaPlayer1 {
  play1(): void;
  pause1(): void;
  stop1(): void;
}

//implementation
class MusicPlayer1 implements MediaPlayer1 {
  play1() {
    console.log("Playing music....");
  }
  pause1() {
    console.log("Music paused... ");
  }
  stop1() {
    console.log(`Music stopped`);
  }
}

const PlayerOn = new MusicPlayer1(); // instance
PlayerOn.play1();

// --------- using Abstract class -------------
abstract class MediaPlayer2 {
  abstract play2(): void;
  abstract pause2(): void;
  abstract stop2(): void;
}

//implementation
class MusicPlayer2 extends MediaPlayer2 {
  play2() {
    console.log(`Playing music...`);
  }
  pause2(): void {
    console.log("Music is paused !");
  }
  stop2(): void {
    console.log("Music is stopped !");
  }
}

const playerOn2 = new MusicPlayer2();
playerOn2.play2();
