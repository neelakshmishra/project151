AFRAME.registerComponent("car", {
    schema:{
        img : {type:"string",default:'./car/scene.gltf'}
    },
    init:function(){
        this.el.setAttribute("gltf-model", this.data.img);
        const position = { x: 0, y: 50, z: 80 };
        const rotation = { x: 0, y: -100, z: 0 };
        
        this.el.setAttribute("rotation", rotation);
        this.el.setAttribute("position",position)
    }

})