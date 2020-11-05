class Graph{
    constructor(data,labels){
        this.data = data;
        this.labels = labels;
        this.total = this.max(this.data);    
    }
   max(array){
        var i =0;var max = 0;
        for (i=0;i<array.length;i++){
             if (max<array[i]){
               max = array[i];
             }   
        }    
        return max;
    }
    getbargraph(width,height) {
    var j =0;
    var table = '<table style="width:'+width+'px;height:'+height+'px;" > <tr style="column-gap: 20px;">';
       for (j=0;j<this.data.length;j++){
        
        var percent = (this.data[j]/this.total)*100;

        var bar_width = width/this.data.length;
        
        var bar_height = height*(percent/100);
        
        var table_cols = '<td style="vertical-align: bottom;">'+parseInt(percent)+'%'+
        '<div style="background-color:red;width:'+
        bar_width+'px;height:'+bar_height+'px;"></div><p align="center">'+this.labels[j]+'</p></td>'; 
         table= table+table_cols;
   }
       table+='</tr></table>';
       return table; 
    }

    getcolouredbargraph(width,height) {
        var colours =  ['#4A235A','#1B4F72','#641E16','#A04000','#BB8FCE','#F7DC6F','#04FC04'];
        var j =0;
        var table = '<table style="width:'+width+'px;height:'+height+'px;" > <tr style="column-gap: 20px;">';
           for (j=0;j<this.data.length;j++){
            
            var percent = (this.data[j]/this.total)*100;
    
            var bar_width = width/this.data.length;
            
            var bar_height = height*(percent/100);
            
            var table_cols = '<td style="vertical-align: bottom;">'+parseInt(percent)+'%'+
            '<div style="background-color:'+colours[j]+';width:'+
            bar_width+'px;height:'+bar_height+'px;"></div><p align="center">'+this.labels[j]+'</p></td>'; 
             table= table+table_cols;
       }
           table+='</tr></table>';
           return table; 
        }

        GetPieChart(width){
            var colours =  ['purple','blue','green',' lightsalmon','darkblue','indianred','#04FC04'];
            var j = 0;var main='';
            for (j=0;j<this.data.length;j++){
                var percent = (this.data[j]/this.total)*100;
                var area = 360*(percent/100);
                if (j==0){
                    main+=colours[j]+' '+area+'deg,'
                }
                else if(j<this.data.length-1 && j>0){
                    main+=colours[j]+' 0 '+area+'deg,'

                }
                else if(j == this.data.length-1){
                    main+=colours[j]+' 0 ';
                }
                }
            
            var str = main 
            var chart = '<div id="pie_chart" style="display: block;'+
                                            'position: absolute;width: '+width+'px;'+
                                            'height: '+width+'px;border-radius: 50%;'+
                                            'background-image: conic-gradient('+main+');"></div>';
        return chart    
        }

    }
