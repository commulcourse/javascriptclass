package ex01;

public class App {

   public static void main(String[] args) {
      Downloader d1 = new Downloader((data)->{
    	  System.out.println("data : "+data);
    	  });
      d1.down();
      System.out.println("다른일");
      System.out.println("다른일");
      System.out.println("다른일");
      System.out.println("다른일");
   }

}