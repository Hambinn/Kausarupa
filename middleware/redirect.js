const getDate = new Date(2021, 11, 8, 20, 40)
export default function(ctx){
    const now = new Date()
    if(gepDate - now > 0){
        if(ctx.route.fullPath != '/Underconstruction'){
            ctx.redirect(301, '/Underconstruction')
        }
    }
}