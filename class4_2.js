// Promise async / await
// Future then / catch

console.log(1)
setTimeout(() => console.log(2), 1000) // run after 1 sec
console.log(3)

const delay = ms => {
    return new Promise(
        (resolve, reject) => {
            setTimeout(() => {
                reject("Faliure after " + ms + " ms") // failure statement/callback
                // resolve(`Resolved after ${ms} ms`) // success statement/callback
            }, ms)
        }
    )
}

const promiseCall = async () => {
    console.log("Start")

    try {
        const res = await delay(2000) // wait for promise to resolve
        console.log(res) // resolved value
    } catch (err) {
        console.log(err) // rejected value
    }

    delay(2000) // non blocking
        .then(msg => console.log(msg)) // wait for promise to resolve
        .catch(err => console.log(err)) // wait for promise to reject

    console.log("End") // runs before promise is resolved

}

promiseCall()

const sequentialPromise = async () => {
    console.time("sequentialPromise")
    const res1 = await delay(3000)
    console.log(res1)
    const res2 = await delay(5000)
    console.log(res2)
    // wait time is sum of both
    console.timeEnd("sequentialPromise")
}
sequentialPromise()

const parallelPromise = async () => {
    console.time("parallelPromise")
    const [res1, res2] = await Promise.all([
        delay(3000),
        delay(5000)
    ]) // wait time is the max of both
    console.log(res1, res2)
    console.timeEnd("parallelPromise")
}

// Promise, on delay function add another argument, num
// if num % 2 == 0, reslove after ms
// else reject ms
// simulate (1000, 1500, 2000, 3000)
// run this both parallely and sequentially
// make a new function
// log the resolved and rejected values separately
// catch the errors in parallel execution with Promise.allSettled
// Make a new function
// log the resolved and rejected values separately
// using non - blocking, then run 1000, 2000, 3000 sequentially

// Modified delay() function

// Modified delay function
const delayWithNum = (ms, num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 === 0) {
                resolve(`✅ Resolved after ${ms} ms (num: ${num})`)
            } else {
                reject(`❌ Rejected after ${ms} ms (num: ${num})`)
            }
        }, ms)
    })
}

// Sequential Execution
const sequentialRun = async () => {
    console.log("\n--- Sequential Execution ---")
    console.time("Sequential")

    const inputs = [
        [1000, 2],
        [1500, 3],
        [2000, 4],
        [3000, 5]
    ]

    const resolved = []
    const rejected = []

    for (const [ms, num] of inputs) {
        try {
            const res = await delay(ms, num)
            resolved.push(res)
        } catch (err) {
            rejected.push(err)
        }
    }

    console.log("Resolved:", resolved)
    console.log("Rejected:", rejected)
    console.timeEnd("Sequential")
}

// Parallel Execution with Promise.allSettled
const parallelRun = async () => {
    console.log("\n--- Parallel Execution ---")
    console.time("Parallel")

    const inputs = [
        [1000, 2],
        [1500, 3],
        [2000, 4],
        [3000, 5]
    ]

    const promises = inputs.map(([ms, num]) => delay(ms, num))

    const results = await Promise.allSettled(promises)

    const resolved = results
        .filter(r => r.status === "fulfilled")
        .map(r => r.value)

    const rejected = results
        .filter(r => r.status === "rejected")
        .map(r => r.reason)

    console.log("Resolved:", resolved)
    console.log("Rejected:", rejected)
    console.timeEnd("Parallel")
}

// Non-blocking Sequential Run using .then()
const nonBlockingSequential = () => {
    console.log("\n--- Non-Blocking Sequential Run ---")
    delay(1000, 2)
        .then(res => {
            console.log(res)
            return delay(2000, 3)
        })
        .then(res => {
            console.log(res)
            return delay(3000, 4)
        })
        .then(res => console.log(res))
        .catch(err => console.log("Caught:", err))
}

// Run all
(async () => {
    await sequentialRun()
    await parallelRun()
    nonBlockingSequential()
})()
