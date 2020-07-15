import Appointment from '../infra/typeorm/entities/Appointment';
import ICrateAppointmentDTO from '../dtos/ICrateAppointmentDTO';

export default interface IAppointmentsRepository {
    create(data: ICrateAppointmentDTO): Promise<Appointment>;
    findByDate(date: Date): Promise<Appointment | undefined>;
}
