Open the App.js file to start writing some code. You can preview the changes directly on your phone or tablet by commnd expo start   using the simulator 
and u will get ur app
"getting information from web ser"

If you're having problems, you can email me to @wafi15072000@gmail.com 




//USING FATCH METHOD //
fetchData= async()=>{
    const response = await fetch('https://raw.githubusercontent.com/Hardeepcoder/fake_json/master/Users');
    const users = await response.json();
    this.setState({data: users});

  }
  
  
  //SC OF APP //
  ![Screenshot_20210605_234446](https://user-images.githubusercontent.com/84851769/120907338-6b076300-c658-11eb-86c5-d154b8db348b.jpg)

//SC of web ser//
![Capture d’écran 2021-06-05 234612](https://user-images.githubusercontent.com/84851769/120907348-84a8aa80-c658-11eb-9431-c01c11db8f9f.jpg)
