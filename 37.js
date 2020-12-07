function mult()
{
 let name = document.querySelector('#multiple').value;
 var op = name*37;
document.querySelector('#mul').innerHTML = "(a = " + name/3 + ") " + op;
}

function major()
{
 var chrom = ["A", "A#", "B", "C", "C#", "D", "D#","E","F","F#","G","G#"];
 let name = document.querySelector('#maj_name').value;
 var op = ""
 if (name.toLowerCase() === 'chromatic')
    {
        op = chrom;
    }
 else
    {
     var j = 0
     for (var i = 0; i < chrom.length; i++)
         {
          if (name.charAt(0).toUpperCase() + name.slice(1) === chrom[i])
             {
               op = [chrom[(i)%12],chrom[(i+2)%12],chrom[(i+4)%12],chrom[(i+5)%12],chrom[(i+7)%12],chrom[(i+9)%12],chrom[(i+11)%12]];
               j++;
               break;
              }
          }
    }
if (name === "" || j === 0)
   {
    document.querySelector('#maj').innerHTML = 'Enter Correct Key';
   }
else if (name.toLowerCase() === 'chromatic')
    {
    document.querySelector('#maj').innerHTML = ' Chromatic Scale: ' + op + '.';
    }
else
    {
    document.querySelector('#maj').innerHTML = name.charAt(0).toUpperCase() + name.slice(1) +' Major Scale: ' + op + '.';
    }
}


function chord()
{
 var chrom = ["A", "A#", "B", "C", "C#", "D", "D#","E","F","F#","G","G#"];
 let name = document.querySelector('#note').value;
 var j = 0
 for (var i = 0; i < chrom.length; i++)
     {
      if (name.charAt(0).toUpperCase() + name.slice(1) === chrom[i])
         {
           var m = [chrom[(i)%12],chrom[(i+3)%12],chrom[(i+7)%12]];
           var m7 = [chrom[(i)%12],chrom[(i+3)%12],chrom[(i+7)%12],chrom[(i+10)%12]];
           var m9 = [chrom[(i)%12],chrom[(i+3)%12],chrom[(i+7)%12],chrom[(i+2)%12]];
           var M = [chrom[(i)%12],chrom[(i+4)%12],chrom[(i+7)%12]];
           var M7 = [chrom[(i)%12],chrom[(i+4)%12],chrom[(i+7)%12],chrom[(i+10)%12]];
           var Maj7 = [chrom[(i)%12],chrom[(i+4)%12],chrom[(i+7)%12],chrom[(i+11)%12]];
           var M9 = [chrom[(i)%12],chrom[(i+4)%12],chrom[(i+7)%12],chrom[(i+2)%12]];
           j++;
           break;
          }
      }
 if (name === "" || j === 0)
    {
     document.querySelector('#mc').innerHTML = 'Enter Correct Note';
    }
 else
    {
     document.querySelector('#mc').innerHTML = name.charAt(0).toUpperCase() + name.slice(1) +' Minor Chord: ' + m + '.';
     document.querySelector('#m7c').innerHTML = name.charAt(0).toUpperCase() + name.slice(1) +' Minor7 Chord: ' + m7 + '.';
     document.querySelector('#m9c').innerHTML = name.charAt(0).toUpperCase() + name.slice(1) +' madd9 Chord: ' + m9 + '.';
     document.querySelector('#Mc').innerHTML = name.charAt(0).toUpperCase() + name.slice(1) +' Major Chord: ' + M + '.';
     document.querySelector('#M7c').innerHTML = name.charAt(0).toUpperCase() + name.slice(1) +'7 Chord: ' + M7 + '.';
     document.querySelector('#Maj7c').innerHTML = name.charAt(0).toUpperCase() + name.slice(1) +'Maj7 Chord: ' + Maj7 + '.';
     document.querySelector('#M9c').innerHTML = name.charAt(0).toUpperCase() + name.slice(1) +'add9 Chord: ' + M9 + '.';
    }
}
