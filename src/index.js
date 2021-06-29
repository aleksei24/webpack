import _ from 'lodash';
import numRefer from './refer.json';

export function numToWord(num) {
    return _.reduce(
        numRefer,
        (acc, ref) => {
            return ref.num === num ? ref.word : acc;
        },
        ''
    );
}

export function wordToNum(num) {
    return _.reduce(
        numRefer,
        (acc, ref) => {
            return ref.word === word && word.toLowerCase() ? ref.num : acc;
        },
        ''
    );
}
