import _ from 'lodash'
import $ from 'jquery'

const element = $('<div>')
element.html(_.join(['Peng', 'Geng', 'hello'], '**'))
$('body').append(element)