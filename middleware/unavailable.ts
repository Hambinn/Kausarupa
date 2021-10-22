const unavailable=({redirect, isDev}) => {
    if(!isDev){
        return redirect('Underconstruction')
    }
}

export default unavailable