const { readFile, writeFile } = require('fs')

console.log('start')
readFile(
    'JS\\FrameWorks\\NodeJS\\content\\temp.txt',
    'utf-8',
    (err, results) => {
        if (err) {
            console.log(err)
            return;
        }
        const first = results

        readFile(
            'JS\\FrameWorks\\NodeJS\\content\\result-sync.txt',
            'utf-8',
            (err, results) => {
                if (err) {
                    console.log(err)
                    return;
                }
                const second = results

                writeFile(
                    'JS\\FrameWorks\\NodeJS\\content\\result-sync-2.txt',
                    'How are You',
                    { flag: 'a' },
                    (err, results) => {
                        if (err) {
                            console.log(err)
                            return
                        }
                        else {
                            console.log('Done with this Task')
                        }
                    })
            })
    })

console.log("Staring next start")


