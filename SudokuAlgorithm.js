let data = [
    { x:1, y:1, id:'1a', group:1, value:''},
    { x:2, y:1, id:'2a', group:1, value:''},
    { x:3, y:1, id:'3a', group:1, value:''},
    { x:4, y:1, id:'4a', group:2, value:''},
    { x:5, y:1, id:'5a', group:2, value:''},  
    { x:6, y:1, id:'6a', group:2, value:''},
    { x:7, y:1, id:'7a', group:3, value:''},
    { x:8, y:1, id:'8a', group:3, value:''},
    { x:9, y:1, id:'9a', group:3, value:''},

    { x:1, y:2, id:'1b', group:1, value:''},
    { x:2, y:2, id:'2b', group:1, value:''},
    { x:3, y:2, id:'3b', group:1, value:''},
    { x:4, y:2, id:'4b', group:2, value:''},
    { x:5, y:2, id:'5b', group:2, value:''},
    { x:6, y:2, id:'6b', group:2, value:''},
    { x:7, y:2, id:'7b', group:3, value:''},
    { x:8, y:2, id:'8b', group:3, value:''},
    { x:9, y:2, id:'9b', group:3, value:''},

    { x:1, y:3, id:'1c', group:1, value:''},
    { x:2, y:3, id:'2c', group:1, value:''},
    { x:3, y:3, id:'3c', group:1, value:''},
    { x:4, y:3, id:'4c', group:2, value:''},
    { x:5, y:3, id:'5c', group:2, value:''},
    { x:6, y:3, id:'6c', group:2, value:''},
    { x:7, y:3, id:'7c', group:3, value:''},
    { x:8, y:3, id:'8c', group:3, value:''},
    { x:9, y:3, id:'9c', group:3, value:''},

    { x:1, y:4, id:'1d', group:4, value:''},
    { x:2, y:4, id:'2d', group:4, value:''},
    { x:3, y:4, id:'3d', group:4, value:''},
    { x:4, y:4, id:'4d', group:5, value:''},
    { x:5, y:4, id:'5d', group:5, value:''},
    { x:6, y:4, id:'6d', group:5, value:''},
    { x:7, y:4, id:'7d', group:6, value:''},
    { x:8, y:4, id:'8d', group:6, value:''},
    { x:9, y:4, id:'9d', group:6, value:''},

    { x:1, y:5, id:'1e', group:4, value:''},
    { x:2, y:5, id:'2e', group:4, value:''},
    { x:3, y:5, id:'3e', group:4, value:''},
    { x:4, y:5, id:'4e', group:5, value:''},
    { x:5, y:5, id:'5e', group:5, value:''},
    { x:6, y:5, id:'6e', group:5, value:''},
    { x:7, y:5, id:'7e', group:6, value:''},
    { x:8, y:5, id:'8e', group:6, value:''},
    { x:9, y:5, id:'9e', group:6, value:''},

    { x:1, y:6, id:'1f', group:4, value:''},
    { x:2, y:6, id:'2f', group:4, value:''},
    { x:3, y:6, id:'3f', group:4, value:''},
    { x:4, y:6, id:'4f', group:5, value:''},
    { x:5, y:6, id:'5f', group:5, value:''},
    { x:6, y:6, id:'6f', group:5, value:''},
    { x:7, y:6, id:'7f', group:6, value:''},
    { x:8, y:6, id:'8f', group:6, value:''},
    { x:9, y:6, id:'9f', group:6, value:''},

    { x:1, y:7, id:'1g', group:7, value:''},
    { x:2, y:7, id:'2g', group:7, value:''},
    { x:3, y:7, id:'3g', group:7, value:''},
    { x:4, y:7, id:'4g', group:8, value:''},
    { x:5, y:7, id:'5g', group:8, value:''},
    { x:6, y:7, id:'6g', group:8, value:''},
    { x:7, y:7, id:'7g', group:9, value:''},
    { x:8, y:7, id:'8g', group:9, value:''},
    { x:9, y:7, id:'9g', group:9, value:''},

    { x:1, y:8, id:'1h', group:7, value:''},
    { x:2, y:8, id:'2h', group:7, value:''},
    { x:3, y:8, id:'3h', group:7, value:''},
    { x:4, y:8, id:'4h', group:8, value:''},
    { x:5, y:8, id:'5h', group:8, value:''},
    { x:6, y:8, id:'6h', group:8, value:''},
    { x:7, y:8, id:'7h', group:9, value:''},
    { x:8, y:8, id:'8h', group:9, value:''},
    { x:9, y:8, id:'9h', group:9, value:''},

    { x:1, y:9, id:'1i', group:7, value:''},
    { x:2, y:9, id:'2i', group:7, value:''},
    { x:3, y:9, id:'3i', group:7, value:''},
    { x:4, y:9, id:'4i', group:8, value:''},
    { x:5, y:9, id:'5i', group:8, value:''},
    { x:6, y:9, id:'6i', group:8, value:''},
    { x:7, y:9, id:'7i', group:9, value:''},
    { x:8, y:9, id:'8i', group:9, value:''},
    { x:9, y:9, id:'9i', group:9, value:''}
]

function UpdateTable() {
    for(let i=0;i<data.length;i++) {
        document.getElementById(data[i].id).innerHTML = data[i].value
        if(data[i].value) {
            document.getElementById(data[i].id).style.background = 'gray'
        } else if(data[i].ticked) {
            document.getElementById(data[i].id).style.background = 'red'
        } else {
            document.getElementById(data[i].id).style.background = 'none'
        }
    }
}

function HTMLIDtoOBJID(Functionid) {
    for(let i=0;i<data.length;i++) {
        if(data[i].id==Functionid) {
            return i
        }
    }
}

function LoadFunction() {
    console.log("Loading default sudoku!");
    data[HTMLIDtoOBJID('9a')].value='1'
    data[HTMLIDtoOBJID('6b')].value='1'
    data[HTMLIDtoOBJID('3c')].value='1'
    data[HTMLIDtoOBJID('2d')].value='1'
    data[HTMLIDtoOBJID('4e')].value='1'
    data[HTMLIDtoOBJID('5i')].value='1'
    data[HTMLIDtoOBJID('3b')].value='2'
    data[HTMLIDtoOBJID('7c')].value='2'
    data[HTMLIDtoOBJID('7c')].value='2'
    data[HTMLIDtoOBJID('5d')].value='2'
    data[HTMLIDtoOBJID('8f')].value='2'
    data[HTMLIDtoOBJID('1i')].value='2'
    data[HTMLIDtoOBJID('1e')].value='3'
    data[HTMLIDtoOBJID('3g')].value='3'
    data[HTMLIDtoOBJID('6h')].value='3'
    data[HTMLIDtoOBJID('5e')].value='4'
    data[HTMLIDtoOBJID('9f')].value='4'
    data[HTMLIDtoOBJID('7g')].value='4'
    data[HTMLIDtoOBJID('1a')].value='5'
    data[HTMLIDtoOBJID('8c')].value='5'
    data[HTMLIDtoOBJID('6e')].value='5'
    data[HTMLIDtoOBJID('2g')].value='5'
    data[HTMLIDtoOBJID('7h')].value='5'
    data[HTMLIDtoOBJID('4i')].value='5'
    data[HTMLIDtoOBJID('6a')].value='6'
    data[HTMLIDtoOBJID('7b')].value='6'
    data[HTMLIDtoOBJID('9e')].value='6'
    data[HTMLIDtoOBJID('2f')].value='6'
    data[HTMLIDtoOBJID('8g')].value='6'
    data[HTMLIDtoOBJID('4b')].value='7'
    data[HTMLIDtoOBJID('2c')].value='7'
    data[HTMLIDtoOBJID('8d')].value='7'
    data[HTMLIDtoOBJID('9i')].value='7'
    data[HTMLIDtoOBJID('5a')].value='8'
    data[HTMLIDtoOBJID('3h')].value='8'
    data[HTMLIDtoOBJID('1d')].value='9'
    data[HTMLIDtoOBJID('5f')].value='9'
    data[HTMLIDtoOBJID('4h')].value='9'
    UpdateTable();
}

function TextFunction(mode, sudokuCellID) {
    let cell
    let cellvalue
    if(mode == 'inputCell') {
        cell = document.getElementById("inputCell").value;
        cellvalue = document.getElementById("inputValue").value;
        //Update values in objects array
        for(let i=0;i<data.length;i++) {
            if(data[i].id == cell) {
                data[i].value = cellvalue
            }
        }
    } else if(mode == 'sudokuCell') {
        //todo: detect from grid - don't forget to upgrade updateTable()
        for(let i = 0;i<data.length;i++) {
            cell = i;
            querySelectorV = '#\\' + (parseInt(data[i].id.substring(0,1))+30) + ' ' + data[i].id.substring(1,2) + ' > input' //'#1a > input' → '#\\31 a > input'
            try {
                cellvalue = document.querySelector(`${querySelectorV}`).value;
            } catch (error) { }
            if(data[i].value !== 'null') {
                data[i].value = cellvalue
            }
            cellvalue = null;
        }
    }
    UpdateTable();
}
function SolveFunction() {
    for(let n=1;n<=9;n++) {
        resetTicks(n);
        
        //console.log("n: " + n);
        //Check all ticked cells for number round
        for(let i=0;i<data.length;i++) {
            if(data[i].value == n) {
                for(j=0;j<data.length;j++) {
                    //Check for horizontal match with N number
                    if(data[j].x==data[i].x) {
                        data[j].ticked=true
                        //document.getElementById(data[j].id).style.background = 'red'
                    }
                    //Check for vertical match with N number
                    if(data[j].y==data[i].y) {
                        data[j].ticked=true
                        //document.getElementById(data[j].id).style.background = 'red'
                    }
                    //Check for group match with N number
                    if(data[j].group==data[i].group) {
                        data[j].ticked=true
                        //document.getElementById(data[j].id).style.background = 'red'
                    }
                }
            //Check for any other filled cells
            } else if(data[i].value) {
                data[i].ticked=true
                //document.getElementById(data[i].id).style.background = '#b30000'
            }
        }
        //Check for 1 empty in horizontal X axis
        let Xticked = 0
        for(let ky=1;ky<=9;ky++) {
            Xticked=0
            for (let l=0;l<data.length;l++) {
                if(data[l].y==ky && data[l].ticked) {
                    Xticked++
                }
            }
            if(Xticked==8) {
                //console.log("Detected horizontal spot for n=" + n + " at y=" + ky);
                //Locate coordinates & insert n
                for(let kyX=1;kyX<=9;kyX++) {
                    if(!data[ky].Xticked) {
                        for(let qq=0;qq<data.length;qq++) {
                            if(data[qq].y==ky && data[qq].x==kyX && !data[qq].ticked) {
                                //console.log("Checking cell: " + data[qq].id)
                                if(groupPerforationCheck(data[qq].group)) {
                                    //console.log(`Placing ${n} at cell ${data[qq].id}`);
                                    data[qq].value = n
                                    data[qq].ticked=true
                                    UpdateTable();
                                    resetTicks(n)
                                    setTimeout(SolveFunction,0); //50
                                    return;
                                } else {
                                    //console.log("Group is not filled.")
                                }
                            }
                        }
                    }
                }
            }
            Xticked=0
        }
        //Check for 1 empty in vertical Y axis
        let Yticked = 0
        for(let kx=1;kx<=9;kx++) {
            Yticked=0
            for (let l=0;l<data.length;l++) {
                if(data[l].x==kx && data[l].ticked) {
                    Yticked++
                }
            }
            if(Yticked==8) {
                //console.log("Detected vertical spot for n=" + n + " at x=" + kx)
                //Locate coordinates & insert n
                for(let kxY=1;kxY<=9;kxY++) {
                    if(!data[kx].Yticked) {
                        for(let qq=0;qq<data.length;qq++) {
                            if(data[qq].x==kx && data[qq].y==kxY && !data[qq].ticked) {
                                //console.log("Checking cell: " + data[qq].id)
                                if(groupPerforationCheck(data[qq].group)) {
                                    //console.log(`Placing ${n} at cell ${data[qq].id}`);
                                    data[qq].value = n
                                    data[qq].ticked=true
                                    UpdateTable();
                                    setTimeout(SolveFunction,0); //50
                                    return;
                                } else {
                                    //console.log("Group is not filled.")
                                }
                            }
                        }
                    }
                }
            }
            Yticked=0
        }
    }
}
function resetTicks(n) {
//Reset checked for stage n
    for(let z=0;z<data.length;z++) {
        data[z].ticked=false
        data[z].Xticked=false
        data[z].Yticked=false
        UpdateTable();
    }
    //console.log("Finished stage " + n)
}

//Check for perforation in group
function groupPerforationCheck(group) {
    let groupTicks = 0
    let CellID
    //console.log("recieved perforation check request at group: " + group);
    for(let i=0; i<data.length;i++) {
        if(data[i].value && data[i].group == group) {
            groupTicks++
            //console.log("Group ticks (.value): " + groupTicks);
            cellID = i
        } else if(data[i].ticked && data[i].group == group) {
            groupTicks++
            //console.log("Group ticks (.ticked): " + groupTicks);
            cellID = i
        }
        if(groupTicks==8) {
            //console.log("Perforation in group found! ID: " + cellID);
            return cellID;
        }
    }
}