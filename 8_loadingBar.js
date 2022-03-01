function loadingBar(percent) {

    if (percent != 100) {
        let bar = [];
        for (i = 1; i <= percent / 10; i++) {
            bar.unshift('%');
        }
        for (j = 1; j <= 10 - (percent / 10); j++) {
            bar.push('.')
        }
        console.log(`${percent}% [${bar.join('')}]`)
        console.log('Still loading...');

    } else if (percent == 100){
        console.log('100% Complete!');
        console.log('[%%%%%%%%%%]');
    }
}
loadingBar(70)