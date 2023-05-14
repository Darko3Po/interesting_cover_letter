var i = 0;
var txt = "Hello, I applied for a job at your company because you seem to be doing very interesting things. I know I don't have much experience, but I am very creative and curious about learning new technologies. I know a lot about frontend and backend, and I'm currently improving my knowledge of React. My latest project is an e-commerce business: https://svijet-satova.shop and www.livadicafamilycamp.com I hope you need people who want to work and improve in the field of digital industry, I know you are looking for a senior position, but if you can I would be honored to help a good junior. I hope for your answer, Darko Potajac";
var speed = 60;

	function type(){
		document.getElementById('type').innerHTML+=txt.charAt(i);
		i++;
		setTimeout(type,speed);
		}
	type();