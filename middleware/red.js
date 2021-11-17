const gepDate = new Date("Nov 10, 2025 20:45:00").getTime();
export default function(ctx){
    const now = new Date().getTime();
    if(gepDate - now > 0){
        if(ctx.route.fullPath != 'Underconstruction'){
            ctx.redirect(301, 'Underconstruction')
        }
    }
    console.log(now)
} 