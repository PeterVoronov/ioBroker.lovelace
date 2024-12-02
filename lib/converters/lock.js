const utils = require('./../entities/utils');
const adapterData = require('./../dataSingleton');

exports.processLock = function (id, control, name, room, func, _obj, objects, forcedEntityId) {
    const entity = utils.processCommon(name, room, func, _obj, 'lock', forcedEntityId);

    let state = control.states.find(s => s.id && s.name === 'SET');
    entity.context.STATE = { setId: null, getId: null };
    if (state && state.id) {
        entity.context.STATE.setId = state.id;
        entity.context.STATE.getId = state.id; //fallback if no getId.
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'ACTUAL');
    if (state && state.id) {
        entity.context.STATE.getId = state.id;
        utils.addID2entity(state.id, entity);
    }

    state = control.states.find(s => s.id && s.name === 'OPEN');
    if (state && state.id) {
        entity.attributes.supported_features = 1;
        entity.context.COMMANDS = [
            {
                service: 'open',
                setId: state.id,
                parseCommand: (entity, command, data, user) => {
                    return new Promise((resolve, reject) => {
                        adapterData.adapter.setForeignState(command.setId, true, false, { user }, err =>
                            err ? reject(err) : resolve(),
                        );
                    });
                },
            },
        ];
    }
    return [entity];
};

function augmentServices(services) {
    services.lock = {
        open: {
            name: 'Open',
            description: 'Open the lock.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['lock'],
                    },
                ],
            },
        },
        lock: {
            name: 'Lock',
            description: 'Lock the lock.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['lock'],
                    },
                ],
            },
        },
        unlock: {
            name: 'Unlock',
            description: 'Unlock the lock.',
            fields: {},
            target: {
                entity: [
                    {
                        domain: ['lock'],
                    },
                ],
            },
        },
    };
}
augmentServices(adapterData.services);
