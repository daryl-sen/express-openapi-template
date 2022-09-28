import {
    Body, Controller, Get, Path, Post, Query, Res, Response, Route, SuccessResponse, TsoaResponse
} from 'tsoa';

import { User } from './user';
import { UserCreationParams, UsersService } from './usersService';

interface ValidateErrorJSON {
  message: "Validation failed";
  details: { [name: string]: unknown };
}

@Route("users")
export class UsersController extends Controller {
  @Response<ValidateErrorJSON>(404, "Not Found")
  @Get("{userId}")
  public async getUser(
    @Path() userId: number,
    @Res() notFoundResponse: TsoaResponse<404, { reason: string }>,
    @Query() name?: string
  ): Promise<User> {
    const fetchedUser = new UsersService().get(userId, name);

    if (!fetchedUser) {
      return notFoundResponse(404, { reason: "User not found" });
    }

    return fetchedUser;
  }

  @Response<ValidateErrorJSON>(422, "Validation Failed")
  @SuccessResponse("201", "Created") // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams
  ): Promise<void> {
    this.setStatus(201); // set return status 201
    new UsersService().create(requestBody);
    return;
  }
}
