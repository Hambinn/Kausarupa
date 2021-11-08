<template>
  <div>
    <span id="rcp-span" style="display: none; top: 419px; left: 253px;">
      ©
    </span>
  </div>
</template>

<script>
// component to enhance copyright by disabling
// dragging images and disabling contextmenu
  export default {
    name: "RCP",
    props: {
      enableDrag: {
        type: Boolean,
        default: false
      },
      enableCtxMenu: {
        type: Boolean,
        default: false
      },
      ignoreElement: {
        type: String,
        default: null
      },
    },
    data() {
      return {
        rcpSpan: undefined
      }
    },
    mounted () {
      this.rcpSpan = document.getElementById("rcp-span")
      if (!this.enableDrag){
        window.ondragstart = e => {
          this.handleDragStart(e)
        }
      }
      if (!this.enableCtxMenu){
        window.onmousemove = e => {
          this.handleMouseMove(e)
          
        }
        if (document.addEventListener) {
          document.addEventListener("contextmenu", e => {
              this.showCR()
              e.preventDefault()
              
            },
            false
          )
        } else {
          document.attachEvent("oncontextmenu", () => {
            this.showCR()
            window.event.returnValue = false
            
          })
        }
      }
      document.onkeydown = function (event) {
        if (event.keyCode == 123) {
          // Prevent F12
          return false
        } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
          // Prevent Ctrl+Shift+I
          return false
        }
      }
    },
    methods: {
      handleMouseMove(e) {
        var x = e.clientX,
            y = e.clientY
        this.rcpSpan.style.top = y + 20 + "px"
        this.rcpSpan.style.left = x + 20 + "px"
      },
      handleDragStart(e){
        if (
          e &&
          e.target &&
          (e.target.nodeName === "IMG" || e.target.nodeName === "img") &&
          (this.ignoreElement === null && !e.target.classList.contains(this.ignoreElement))
        ) {
          e.preventDefault()
        } 
      },
      showCR() {
        this.rcpSpan.style.display = "block"
        setTimeout(this.closeCR, 2000)
      },
      closeCR() {
        this.rcpSpan.style.display = "none"
      }
    },
  }
</script>

<style  scoped>
#rcp-span {
  position: fixed;
  overflow: hidden;
  background-color: rgba(54, 54, 54, 0.4);
  border-radius: 2px;
  color: rgb(255, 255, 255);
  padding: 3px 8px 3px 5px;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 11px;
  z-index: 9999;
  }
</style>