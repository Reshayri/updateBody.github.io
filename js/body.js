//body file

function iwh() { 
  //Объявление переменных
  let a,b,c,d;
         a = +document.f.w.value,//Ввод массы человека в килограммах
         b = +document.f.h.value;//Ввод роста человека в сантиметрах
      	// Расчет
		 c= b/100;
		 d= a/(c*c);
		 //im index mass
		 let im= d.toFixed(2); //округление до 2 разряда
		
		//Вывод результатов расчета на текстовое окно
			
		document.f.ind.value = im;//ИНДЕКС МАССЫ	
		//	
		if (im >= 25 & im<= 27) {
			 document.getElementById('demo').innerHTML =  ' У вас пока все в порядке!';	 
		} else if(im<25 & im>10){
		document.getElementById('demo').innerHTML = im + '? Маловато веса. Берите путевку в санаторию!';
		} else if(im>27 & im<=38){
			document.getElementById('demo').innerHTML= im + ' Danger! Не переедайте!';
		} else if(im>38 & im <=67){
		document.getElementById('demo').innerHTML=	im + '? На мясокомбинат!';
		} else if(im > 67){
		document.getElementById('demo').innerHTML=	im + '? Да, ладно! Так не бывает!';
		} else if( im>=1 & im<=10){
			document.getElementById('demo').innerHTML= 'Вообще все это фигня, ешьте, все и сколько хотите!';
		};
 };
 //
 