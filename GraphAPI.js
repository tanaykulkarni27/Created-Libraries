class Graph{
    constructor(data,total){
        this.data = data;
        this.total = total;
    }
    getgraph() {
    var j =0;
    var table = '<table> <tr>';
       for (j=0;j<this.data.length;j++){
        var percent = (this.data[j]/this.total)*100;
        var table_cols = '<td style="vertical-align: bottom;column-gap: 20px;">'+this.data[j]+'<div style="background-color:red;width:14px;height:'+percent+'px;"></div></td>'; 
        table= table+table_cols;
   }
       table+='</tr></table>';
       return table; 
    }
    }
