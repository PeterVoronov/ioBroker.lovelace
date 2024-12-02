const utils = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

// Possible states if non icon:
// "clear-night",
// "cloudy",
// "exceptional",
// "fog",
// "hail",
// "lightning",
// "lightning-rainy",
// "partlycloudy",
// "pouring",
// "rainy",
// "snowy",
// "snowy-rainy",
// "sunny",
// "windy",
// "windy-variant",

exports.processWeather = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'weather', forcedEntityId);

    // - weather => STATE any-text(no icon)/clear-night/cloudy/fog/hail/lightning/lightning-rainy/partlycloudy/pouring/rainy/snowy/snowy-rainy/sunny/windy/windy-variant, attributes: [temperature, pressure, humidity, wind_speed, wind_bearing, forecast]
    //        forecast is an array with max 5 items [{datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}, {...}]

    let state = control.states.find(s => s.id && s.name === 'ICON');
    entity.context.STATE = { getId: null };
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }
    entity.context.ATTRIBUTES = [];

    state = control.states.find(s => s.id && s.name === 'TEMP');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'temperature', getId: state.id });
        utils.addID2entity(state.id, entity);
    } else {
        state = control.states.find(s => s.id && s.name === 'TEMP_MAX');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({ attribute: 'temperature', getId: state.id });
            utils.addID2entity(state.id, entity);
        }
    }

    state = control.states.find(s => s.id && s.name === 'PRESSURE');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'pressure', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'HUMIDITY');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'humidity', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'TIME_SUNRISE');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'sunrise', getId: state.id });
        utils.addID2entity(state.id, entity);
    } else {
        state = control.states.find(s => s.id && s.name === 'TIME_SUNRISE0');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({ attribute: 'sunrise', getId: state.id });
            utils.addID2entity(state.id, entity);
            state.id = null; // do not detect it later
        }
    }

    state = control.states.find(s => s.id && s.name === 'TIME_SUNSET');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'sunset', getId: state.id });
        utils.addID2entity(state.id, entity);
    } else {
        state = control.states.find(s => s.id && s.name === 'TIME_SUNSET0');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({ attribute: 'sunset', getId: state.id });
            utils.addID2entity(state.id, entity);
            state.id = null; // do not detect it later
        }
    }

    state = control.states.find(s => s.id && s.name === 'STATE');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'state_desc', getId: state.id });
        utils.addID2entity(state.id, entity);
    } else {
        state = control.states.find(s => s.id && s.name === 'STATE0');
        if (state && state.id) {
            entity.context.ATTRIBUTES.push({ attribute: 'state_desc', getId: state.id });
            utils.addID2entity(state.id, entity);
            state.id = null; // do not detect it later
        }
    }

    state = control.states.find(s => s.id && s.name === 'WIND_SPEED');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'wind_speed', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'WIND_DIRECTION'); // in °
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'wind_bearing', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'PRECIPITATION_CHANCE');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: `precipitation_probability`, getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'PRECIPITATION');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: `precipitation`, getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    // forecast {datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}
    // day 0
    let somethingFound = false;
    let hassCounter = -1;

    for (let day = 0; day < 9; day++) {
        //add "today" as forecast 0:
        const postFix = day ? String(day) : '';
        let dayShiftId;
        somethingFound = false;
        state = control.states.find(s => s.id && s.name === `ICON${postFix}`);
        if (state && state.id) {
            hassCounter++;
            somethingFound = true;
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.condition`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === `TEMP_MAX${postFix}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.temperature`, getId: state.id });
            utils.addID2entity(state.id, entity);
        } else {
            state = control.states.find(s => s.id && s.name === `TEMP${postFix}`);
            if (state && state.id) {
                if (!somethingFound) {
                    hassCounter++;
                    somethingFound = true;
                }
                dayShiftId = dayShiftId || state.id;
                entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.temperature`, getId: state.id });
                utils.addID2entity(state.id, entity);
            }
        }

        state = control.states.find(s => s.id && s.name === `TEMP_MIN${postFix}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.templow`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === `PRECIPITATION_CHANCE${postFix}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({
                attribute: `forecast.${hassCounter}.precipitation_probability`,
                getId: state.id,
            });
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === `PRECIPITATION${postFix}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.precipitation`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === `HUMIDITY${postFix}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.humidity`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        if (somethingFound) {
            state = control.states.find(s => s.id && s.name === `DATE${postFix}`);
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.datetime`, getId: state.id });
                utils.addID2entity(state.id, entity);
            } else if (dayShiftId) {
                entity.context.ATTRIBUTES.push({
                    attribute: `forecast.${hassCounter}.datetime`,
                    dayShift: day,
                    getId: dayShiftId,
                    getParser: (entity, attr, state) => {
                        let date = new Date();
                        if (state && state.ts) {
                            date = new Date(state.ts);
                        }
                        attr.dayShift && date.setDate(date.getDate() + attr.dayShift);
                        utils.setJsonAttribute(entity.attributes, attr.attribute, date.toISOString());
                    },
                });
            }
        } else if (hassCounter >= 0) {
            break;
        }
    }

    return [entity];
};

exports.processAccuWeather = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'weather', forcedEntityId);

    // - weather => STATE any-text(no icon)/clear-night/cloudy/fog/hail/lightning/lightning-rainy/partlycloudy/pouring/rainy/snowy/snowy-rainy/sunny/windy/windy-variant, attributes: [temperature, pressure, humidity, wind_speed, wind_bearing, forecast]
    //        forecast is an array with max 5 items [{datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}, {...}]

    let state = control.states.find(s => s.id && s.name === 'STATE');
    entity.context.STATE = { getId: null };
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }
    entity.context.ATTRIBUTES = [];

    state = control.states.find(s => s.id && s.name === 'TEMP');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'temperature', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ICON_URL');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'icon_url', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'TIME_SUNRISE');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'sunrise', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'TIME_SUNSET');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'sunset', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'PRESSURE');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'pressure', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'HUMIDITY');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'humidity', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'WIND_SPEED');
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'wind_speed', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'WIND_DIRECTION_STR'); // compass
    if (state && state.id) {
        entity.context.ATTRIBUTES.push({ attribute: 'wind_bearing', getId: state.id });
        utils.addID2entity(state.id, entity);
    }

    // forecast {datetime: something for new Date(aa), temperature, templow, condition(see STATE), precipitation}
    // day 0
    let somethingFound;
    let hassCounter = -1;

    for (let day = 0; day < 6; day++) {
        let dayShiftId;
        somethingFound = false;
        state = control.states.find(s => s.id && s.name === `STATE${day}`);
        if (state && state.id) {
            hassCounter++;
            somethingFound = true;
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.condition`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === `ICON_URL${day}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.icon_url`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === `TEMP_MAX${day}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.temperature`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === `TEMP_MIN${day}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.templow`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        state = control.states.find(s => s.id && s.name === `PRECIPITATION${day}`);
        if (state && state.id) {
            if (!somethingFound) {
                hassCounter++;
                somethingFound = true;
            }
            dayShiftId = dayShiftId || state.id;
            entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.precipitation`, getId: state.id });
            utils.addID2entity(state.id, entity);
        }

        if (somethingFound) {
            state = control.states.find(s => s.id && s.name === `DATE${day}`);
            if (state && state.id) {
                entity.context.ATTRIBUTES.push({ attribute: `forecast.${hassCounter}.datetime`, getId: state.id });
                utils.addID2entity(state.id, entity);
            } else if (dayShiftId) {
                entity.context.ATTRIBUTES.push({
                    attribute: `forecast.${hassCounter}.datetime`,
                    dayShift: hassCounter,
                    getId: dayShiftId,
                    getParser: (entity, attr) => {
                        const date = new Date();
                        attr.dayShift && date.setDate(date.getDate() + attr.dayShift);
                        utils.setJsonAttribute(entity.attributes, attr.attribute, date.toISOString());
                    },
                });
            }
        } else if (hassCounter >= 0) {
            break;
        }
    }

    return [entity];
};

function augmentServices(services) {
    //Not yet supported... hm
    services.weather = {
        get_forecast: {
            name: 'Get forecast',
            description: 'Get weather forecast.',
            fields: {
                type: {
                    required: true,
                    selector: {
                        select: {
                            options: ['daily', 'hourly', 'twice_daily'],
                            translation_key: 'forecast_type',
                        },
                    },
                    name: 'Forecast type',
                    description: 'Forecast type: daily, hourly or twice daily.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['weather'],
                        supported_features: [1, 2, 4],
                    },
                ],
            },
            response: {
                optional: false,
            },
        },
        get_forecasts: {
            name: 'Get forecasts',
            description: 'Get weather forecasts.',
            fields: {
                type: {
                    required: true,
                    selector: {
                        select: {
                            options: ['daily', 'hourly', 'twice_daily'],
                            translation_key: 'forecast_type',
                        },
                    },
                    name: 'Forecast type',
                    description: 'Forecast type: daily, hourly or twice daily.',
                },
            },
            target: {
                entity: [
                    {
                        domain: ['weather'],
                        supported_features: [1, 2, 4],
                    },
                ],
            },
            response: {
                optional: false,
            },
        },
    };
    delete services.weather;
}
augmentServices(adapterData.services);
