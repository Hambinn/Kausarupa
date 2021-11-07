const gepDate = new Date("Nov 8, 2021 00:00:00").getTime();
export default function(ctx){
    const now = new Date().getTime();
    if(gepDate - now > 0){
        if(ctx.route.fullPath != 'Underconstruction'){
            ctx.redirect(301, 'Underconstruction')
        }
    }
    console.log(now)
}