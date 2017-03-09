var vals = ['Illustrator', 'Software engineer', 'Senior Software engineer', 'Graphics design', 'Other positions'];
var keyframes = [vals[0]];

// generate keyframes
var count = 0;
while (count < vals.length) {
    last_frame = keyframes[keyframes.length - 1];
    if (vals[(count + 1) % vals.length] == last_frame) { // if the keyframe is the current string
        count++;
    } else if (vals[(count + 1) % vals.length].lastIndexOf(last_frame, 0) === 0) { // if the current keyframe is part of the desired goal
        keyframes.push(last_frame + vals[(count + 1) % vals.length][last_frame.length]);
    } else { // delete from keyframe
        keyframes.push(last_frame.substring(0, last_frame.length - 1));
    }
}

var input = document.getElementById('i');

function ph_add(i) {
    setTimeout(function() {
        input.setAttribute('placeholder', keyframes[i]);
        if (keyframes[(i + 1) % keyframes.length].length > keyframes[i].length) {
            ph_add((i + 1) % keyframes.length);
        } else {
            setTimeout(function() {
                ph_del((i + 1) % keyframes.length);
            }, 500)
        }
    }, 60 * Math.random());
}

function ph_del(i) {
    setTimeout(function() {
        input.setAttribute('placeholder', keyframes[i]);
        if (keyframes[(i + 1) % keyframes.length].length > keyframes[i].length) {
            ph_add((i + 1) % keyframes.length);
        } else {
            ph_del((i + 1) % keyframes.length);
        }
    }, 65);
}

ph_add(0);
document.getElementById('i').focus()