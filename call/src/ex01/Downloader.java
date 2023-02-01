package ex01;


public class Downloader {

	
	Callback callback;
	String data ="";
	
	public Downloader(Callback callback) {
		this.callback = callback;
	}
	
	public void down() {
		System.out.println("다운로드시작");
		new Thread(()->{
			
			try {
				Thread.sleep(5000);
				System.out.println("다운로드 종료");
				data="바나나";
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
			
		}).start();
	}

}
